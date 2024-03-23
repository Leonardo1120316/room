import React from 'react';
import { Button, Input, Form, message } from 'antd';
import './index.css'
import { useDispatch, useSelector } from "react-redux"
import api from '../../../api/user'
const UserUpdate = ()=> {
    const [messageApi, contextHolder] = message.useMessage();
    const { currentUser } = useSelector((state) => ({
        currentUser: state.UserStore.currentUser
      }))
    const onFinish =()=>{

    }

    const onFinishFailed =()=>{

    }
   
    const [form] = Form.useForm();
        const submit = ()=>{
            let formdata = form.getFieldValue()
            console.log({userPassword: formdata.userPassword,id: currentUser})
            if(formdata.checkPassword==formdata.userPassword){
                api.updatePassword({userPassword: formdata.userPassword,id: currentUser}).then((res)=>{
                    messageApi.info('修改成功');
                }).catch((err)=>{
                    messageApi.info('修改失败');
                })
            }else{
                messageApi.info('修改失败');
            }
        }
        return (<div className='outBox1'>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="密码"
                    name="userPassword"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="确认密码"
                    name="checkPassword"
                    rules={[
                        {
                            required: true,
                            message: '请确认密码',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" onClick={submit}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
        )
}
export default UserUpdate