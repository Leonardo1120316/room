import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Card, message } from 'antd';
import api from '../../../api/room'
import recordapi from '../../../api/record'

const RoomRecommend = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [data, setdata] = useState([])
  async function runEffect() {
      await api.roomList().then((res) => {
        setdata([...res.list])
      }
      ).catch(err => {
        console.log('err', err)
      })
    }
  useEffect(() => {
    runEffect();
  }, [])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [record, setrecord] = useState({});
  const showModal = (item) => {
    setrecord({...item})
    setIsModalOpen(true);
  };
  const handleOk = () => {
    recordapi.addRecord({...form.getFieldValue(),...{roomNumber: record.roomNumber,roomLocation: record.roomLocation}}).then((res)=>{
      messageApi.info('预约成功');
    }).catch((err)=>{
      messageApi.info('预约失败');
    })
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {contextHolder}
      {data.map((item,index)=>(
        <Card size="small" title={"教室："+item.roomLocation} extra={<Button type="primary" onClick={()=>{showModal(item)}}>预定</Button>} style={{ width: 300,float: 'left',margin: 20 }}>
        <p>教室编号：{item.roomNumber}</p>
        <p>剩余座位：{item.roomSeat}</p>
        <p>教室类型：{item.roomType}</p>
        </Card>
      ))}
      <Modal title="预定教室" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form}>
          <Form.Item name="roomNumber" label="教室标号" >
            <Input disabled placeholder={record.roomNumber}/>
          </Form.Item>
          <Form.Item name="roomLocation" label="教室地址" >
            <Input disabled placeholder={record.roomLocation}/>
          </Form.Item>
          <Form.Item name="username" label="预约学生姓名" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
export default RoomRecommend;