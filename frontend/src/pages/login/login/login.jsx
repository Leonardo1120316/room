import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom'
import './login.css'
import api from '../../../api/login'
import { useDispatch, useSelector } from "react-redux"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
    const [form] = Form.useForm();

    const {currentUser} = useSelector((state)=>({
        currentUser: state.UserStore.currentUser
    }))

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const toRegister = (values) => {
        navigate('/register')
    };

    const login = async () => {
        await api.login(form.getFieldValue()).then((res)=>{
             if(res.code == "200"){
                dispatch({type:"setCurrentUser",val: res.data.id})
                navigate('/')
             }
        }).catch((error)=>{
             console.log("login error")
        })
    };

    return (
        <div class="loginBox">
            <div class="formBox">
                <div class="form">
                    <Form
                        {...layout}
                        form={form}
                        name="control-hooks"
                        style={{ maxWidth: 600 }}
                        className='formInner'
                    >
                        <Form.Item name="userAccount" label="账号" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="userPassword" label="密码" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Space>
                                <Button type="primary" htmlType="submit" onClick={login}>
                                    登录
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

export default Login;