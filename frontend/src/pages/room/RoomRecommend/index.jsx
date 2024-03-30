import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Card, message, Col, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import api from '../../../api/room'
import recordapi from '../../../api/record'

const RoomRecommend = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [searchForm] = Form.useForm();
  const [data, setdata] = useState([])
  const { currentUser } = useSelector((state) => ({
    currentUser: state.UserStore.currentUser
  }))
  async function runEffect() {
      await api.roomList().then((res) => {
        setdata([...res.list])
        searchForm.resetFields()
      }
      ).catch(err => {
        console.log('err', err)
      })
    }
  async function search() {
    const data = searchForm.getFieldValue();
    await api.searchRoomList(data).then((res) => {
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
    recordapi.addRecord({...form.getFieldValue(),...{roomNumber: record.roomNumber,roomLocation: record.roomLocation,userId: currentUser}}).then((res)=>{
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
      <div>
        <Form form={searchForm}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Form.Item name="roomLocation" label="教室地址">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
            <Form.Item name="roomType" label="教室类型">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
            <Form.Item name="roomNumber" label="教室编号">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Button type='primary' onClick={search}>查找</Button>
              <Button  onClick={runEffect}>重置</Button>
            </Col>
          </Row>
        </Form>
      </div>
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