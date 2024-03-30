import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Modal, Form, Input, message, Tag } from 'antd';
import api from '../../../api/record'

const Approve = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [data, setdata] = useState([])
  async function runEffect() {
      await api.recordList().then((res) => {
        setdata([...res.list])
      }
      ).catch(err => {
        console.log('err', err)
      })
    }
  useEffect(() => {
    runEffect();
  }, [])
  const [formdata, setformdata] = useState({});
  //approve
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const approveModal = (record) => {
    setformdata(record)
    setIsApproveModalOpen(true);
  };
  const approveHandleOk = async() => {
    await api.editRecord({id: formdata.id,state: '2'}).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    setIsApproveModalOpen(false);
    runEffect()
  };
  const approveHandleCancel = () => {
    setIsApproveModalOpen(false);
  };
  //reject
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const rejectModal = (record) => {
    setformdata(record)
    setIsRejectModalOpen(true);
  };
  const rejectHandleOk = async() => {
    await api.editRecord({id: formdata.id,state: '1'}).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    setIsRejectModalOpen(false);
    runEffect()
  };
  const rejectHandleCancel = () => {
    setIsRejectModalOpen(false);
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
          {record.state==0? <Tag color='blue'>审批中</Tag>: (record.state==1 ? <Tag color='red'>拒绝</Tag>: <Tag color='green'>审批通过</Tag>)}
        </Space>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={()=>{approveModal(record)}} type='primary'>批准</Button>
          <Button onClick={()=>{rejectModal(record)}} type='primary'>拒绝</Button>
          <Button onClick={()=>{editModal(record)}}>删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      {contextHolder}
      <Table columns={columns} dataSource={data} />
      <Modal title="同意" open={isApproveModalOpen} onOk={approveHandleOk} onCancel={approveHandleCancel}>
         <span>是否确认同意？</span>
      </Modal>
      <Modal title="拒绝" open={isRejectModalOpen} onOk={rejectHandleOk} onCancel={rejectHandleCancel}>
         <span>是否确认拒绝？</span>
      </Modal>
      <Modal title="修改" open={isEditModalOpen} onOk={editHandleOk} onCancel={editHandleCancel}>
         <span>是否确认删除？</span>
      </Modal>
    </div>
  );
};
export default Approve;