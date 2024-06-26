import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Modal, Form, Input, message, Tag } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import api from '../../api/record'

const Appointment = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const { currentUser } = useSelector((state) => ({
    currentUser: state.UserStore.currentUser
  }))
  const [data, setdata] = useState([])
  async function runEffect() {
      await api.searchRecordList({id: currentUser}).then((res) => {
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
    await api.deleteRecord(formdata.id).then((res)=>{
      messageApi.info('删除成功');
      runEffect();
    }).catch((err)=>{
      messageApi.info('删除失败');
      console.log(err)
    })
    setIsEditModalOpen(false);
  };
  const editHandleCancel = () => {
    setIsEditModalOpen(false);
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '教室编号',
      dataIndex: 'roomNumber',
      key: 'roomNumber',
    },
    {
      title: '教室地址',
      dataIndex: 'roomLocation',
      key: 'roomLocation',
    },
    {
      title: '预约学生',
      key: 'username',
      dataIndex: 'username',
    },
    {
      title: '状态',
      key: 'state',
      render: (_, record) => (
        <Space size="middle">
          {record.state==0? <Tag color='blue'>审批中</Tag>: record.state==1? <Tag color='red'>拒绝</Tag>: <Tag color='green'>审批通过</Tag>}
        </Space>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={()=>{showModal(record)}} type='primary'>查看</Button>
          <Button onClick={()=>{editModal(record)}}>删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      {contextHolder}
      <Table columns={columns} dataSource={data} />
      <Modal title="查看" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form}>
          <Form.Item name="username" label="ID" >
            <Input disabled placeholder={formdata.id}/>
          </Form.Item>
          <Form.Item name="userAccount" label="教室编号">
            <Input disabled placeholder={formdata.roomNumber} />
          </Form.Item>
          <Form.Item name="introduce" label="教室地址" >
            <Input disabled placeholder={formdata.roomLocation}/>
          </Form.Item>
          <Form.Item name="email" label="预约学生" >
            <Input disabled placeholder={formdata.username}/>
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="删除" open={isEditModalOpen} onOk={editHandleOk} onCancel={editHandleCancel}>
         <span>是否确认删除？</span>
      </Modal>
    </div>
  );
};
export default Appointment;