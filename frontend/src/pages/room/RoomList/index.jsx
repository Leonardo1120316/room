import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Modal, Form, Input } from 'antd';
import api from '../../../api/room'

const RoomList = () => {
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
  const [formdata, setformdata] = useState({});
  const showModal = (record) => {
    setformdata(record)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const editModal = (record) => {
    setformdata(record)
    setIsEditModalOpen(true);
  };
  const editHandleOk = async() => {
    await api.updateRoom({...form.getFieldValue(),...{id: formdata.id}}).then((res)=>{
      runEffect();
    }).catch((err)=>{
      console.log(err)
    })
    setIsEditModalOpen(false);
  };
  const editHandleCancel = () => {
    setIsEditModalOpen(false);
  };
  const columns = [
    {
      title: '教室id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '教室编号',
      dataIndex: 'roomNumber',
      key: 'roomNumber',
    },
    {
      title: '剩余空位',
      dataIndex: 'roomSeat',
      key: 'roomSeat',
    },
    {
      title: '教室地址',
      dataIndex: 'roomLocation',
      key: 'roomLocation',
    },
    {
      title: '教室类型',
      key: 'roomType',
      dataIndex: 'roomType',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={()=>{showModal(record)}} type='primary'>查看</Button>
          <Button onClick={()=>{editModal(record)}}>修改</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Modal title="查看" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form}>
          <Form.Item name="username" label="教室ID" >
            <Input disabled placeholder={formdata.id}/>
          </Form.Item>
          <Form.Item name="userAccount" label="教室编号">
            <Input disabled placeholder={formdata.roomNumber} />
          </Form.Item>
          <Form.Item name="phone" label="教室座位">
            <Input disabled placeholder={formdata.roomNumber}/>
          </Form.Item>
          <Form.Item name="email" label="教室类型" >
            <Input disabled placeholder={formdata.roomType}/>
          </Form.Item>
          <Form.Item name="introduce" label="教室地址" >
            <Input disabled placeholder={formdata.roomLocation}/>
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="修改" open={isEditModalOpen} onOk={editHandleOk} onCancel={editHandleCancel}>
      <Form form={form}>
          <Form.Item name="id" label="教室ID" >
            <Input placeholder={formdata.id} disabled value={formdata.id}/>
          </Form.Item>
          <Form.Item name="roomNumber" label="教室编号">
            <Input placeholder={formdata.roomNumber} />
          </Form.Item>
          <Form.Item name="roomSeat" label="教室座位">
            <Input placeholder={formdata.roomNumber}/>
          </Form.Item>
          <Form.Item name="roomType" label="教室类型" >
            <Input placeholder={formdata.roomType}/>
          </Form.Item>
          <Form.Item name="roomLocation" label="教室地址" >
            <Input placeholder={formdata.roomLocation}/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
export default RoomList;