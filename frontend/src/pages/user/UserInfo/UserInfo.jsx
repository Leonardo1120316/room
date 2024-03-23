import React, { useEffect, useState } from 'react';
import { Descriptions, Avatar, Button, Modal, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css'
import api from '../../../api/user'
import { useDispatch, useSelector } from "react-redux"

const UserInfo = () => {
  const [form] = Form.useForm();
  const { currentUser } = useSelector((state) => ({
    currentUser: state.UserStore.currentUser
  }))

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async() => {
    const req = {...{id: currentUser},...form.getFieldValue()}
    await api.updateUser(req).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    setIsModalOpen(false);
    runEffect();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [userInfo, setUserInfo] = useState({})
  async function runEffect() {
      await api.userInfo(currentUser).then((res) => {
        setUserInfo(res.user)
      }).catch((err) => {
        console.log(err)
      })
    }
  useEffect(() => {
    runEffect();
  }, [])
  const items = [
    {
      key: '1',
      label: '姓名',
      children: userInfo.username,
    },
    {
      key: '2',
      label: '账号',
      children: userInfo.userAccount,
    },
    {
      key: '2',
      label: '电话',
      children: userInfo.phone,
    },
    {
      key: '3',
      label: '邮箱',
      children: userInfo.email,
    },
    {
      key: '4',
      label: '积分',
      children: userInfo.integral,
    },
  ];
  const itemsIntroduce = [
    {
      key: '1',
      children: userInfo.introduce
    },
  ];

  return (
    <div className='outBox'>
      <div>
        <Avatar size={64} icon={<UserOutlined />} className='avatar' src={userInfo.userAvatar} />
        <Button type='primary' className='btn' onClick={showModal}>修改</Button>
      </div>
      <Descriptions title="个人信息" items={items} column={2} />
      <Descriptions title="介绍" items={itemsIntroduce} column={2} />
      <Modal title="修改用户信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form}>
          <Form.Item name="username" label="姓名" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="userAccount" label="账号" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="电话" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="introduce" label="介绍" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default UserInfo