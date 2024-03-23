import React from 'react';
import { Button, Form, Input, Space, message } from 'antd';
import { useNavigate } from 'react-router-dom'
import './register.css'
import api from '../../../api/login'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    
    const navigate = useNavigate();

    const toRegister = async(values) => {
        await api.register(form.getFieldValue()).then((res)=>{
                messageApi.info('注册成功');
        }).catch((err)=>{
            messageApi.info("注册失败")
        })
    };

    const back = () => {
        navigate('/login')
    };

    return (
        <div class="loginBox">
            {contextHolder}
            <div class="formBox">
                <div class="form">
                    <h1>账号注册</h1>
                    <Form
                        {...layout}
                        form={form}
                        name="control-hooks"
                        style={{ maxWidth: 700 }}
                        className='formInner'
                    >
                        <Form.Item name="userAccount" label="请输入账号" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="userPassword" label="请输入密码" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="email" label="请输入邮箱" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="phone" label="请输入手机号" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Space>
                                <Button type="primary" htmlType="submit" onClick={back}>
                                    返回
                                </Button>
                                <Button htmlType="button" onClick={toRegister}>
                                    注册
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;