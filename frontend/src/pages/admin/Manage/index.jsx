import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Modal, Form, Input, Col, Row } from 'antd';
import api from '../../../api/room'

const Manage = () => {
  const [form] = Form.useForm();
  const [searchForm] = Form.useForm();
  const [addForm] = Form.useForm();
  const [data, setdata] = useState([])
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
  async function add() {
    console.log('add')
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
  const editHandleOk = async () => {
    await api.updateRoom({ ...form.getFieldValue(), ...{ id: formdata.id } }).then((res) => {
      runEffect();
    }).catch((err) => {
      console.log(err)
    })
    setIsEditModalOpen(false);
  };
  const editHandleCancel = () => {
    setIsEditModalOpen(false);
  };
  //delete
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteModal = (record) => {
    console.log(record)
    setformdata(record)
    setIsDeleteModalOpen(true);
  };
  const deleteHandleOk = async () => {
    await api.deleteRoom(formdata.id).then((res) => {
      runEffect();
    }).catch((err) => {
      console.log(err)
    })
    setIsDeleteModalOpen(false);
  };
  const deleteHandleCancel = () => {
    setIsDeleteModalOpen(false);
  };
  //add
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const addModal = () => {
    setIsAddModalOpen(true);
  };
  const addHandleOk = async () => {
    await api.addRoom(addForm.getFieldValue()).then((res) => {
      runEffect();
    }).catch((err) => {
      console.log(err)
    })
    setIsAddModalOpen(false);
  };
  const addHandleCancel = () => {
    setIsAddModalOpen(false);
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
          <Button onClick={() => { showModal(record) }} type='primary'>查看</Button>
          <Button onClick={() => { editModal(record) }}>修改</Button>
          <Button onClick={() => { deleteModal(record) }}>删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
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
            <Col className="gutter-row" span={4}>
              <Button type='primary' onClick={search}>查找</Button>
              <Button  onClick={runEffect}>重置</Button>
            </Col>
            <Col className="gutter-row" span={2}>
              <Button type='primary' onClick={addModal}>新增</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modal title="查看" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form}>
          <Form.Item name="username" label="教室ID" >
            <Input disabled placeholder={formdata.id} />
          </Form.Item>
          <Form.Item name="userAccount" label="教室编号">
            <Input disabled placeholder={formdata.roomNumber} />
          </Form.Item>
          <Form.Item name="phone" label="教室座位">
            <Input disabled placeholder={formdata.roomNumber} />
          </Form.Item>
          <Form.Item name="email" label="教室类型" >
            <Input disabled placeholder={formdata.roomType} />
          </Form.Item>
          <Form.Item name="introduce" label="教室地址" >
            <Input disabled placeholder={formdata.roomLocation} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="修改" open={isEditModalOpen} onOk={editHandleOk} onCancel={editHandleCancel}>
        <Form form={form}>
          <Form.Item name="id" label="教室ID" >
            <Input placeholder={formdata.id} disabled value={formdata.id} />
          </Form.Item>
          <Form.Item name="roomNumber" label="教室编号">
            <Input placeholder={formdata.roomNumber} />
          </Form.Item>
          <Form.Item name="roomSeat" label="教室座位">
            <Input placeholder={formdata.roomNumber} />
          </Form.Item>
          <Form.Item name="roomType" label="教室类型" >
            <Input placeholder={formdata.roomType} />
          </Form.Item>
          <Form.Item name="roomLocation" label="教室地址" >
            <Input placeholder={formdata.roomLocation} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="新增" open={isAddModalOpen} onOk={addHandleOk} onCancel={addHandleCancel}>
        <Form form={addForm}>
          <Form.Item name="roomNumber" label="教室编号">
            <Input  />
          </Form.Item>
          <Form.Item name="roomSeat" label="教室座位">
            <Input  />
          </Form.Item>
          <Form.Item name="roomType" label="教室类型" >
            <Input />
          </Form.Item>
          <Form.Item name="roomLocation" label="教室地址" >
            <Input  />
          </Form.Item>
          <Form.Item name="max" label="最大容纳人数" >
            <Input  />
          </Form.Item>
          <Form.Item name="row" label="行" >
            <Input  />
          </Form.Item>
          <Form.Item name="column" label="列" >
            <Input  />
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="删除" open={isDeleteModalOpen} onOk={deleteHandleOk} onCancel={deleteHandleCancel}>
        <span>是否删除教室？</span>
      </Modal>
    </div>
  );
}
export default Manage;