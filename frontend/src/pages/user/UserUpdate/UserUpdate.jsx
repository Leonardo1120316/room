import React from 'react';
import { Button, Input, Form } from 'antd';
import './index.css'

export default class UserUpdate extends React.Component {
 
    constructor() {
        super();
        this.state ={
            form: {}
        }
    }
    
    onFinish =()=>{

    }

    onFinishFailed =()=>{

    }

    render() {

        return <div className='outBox1'>
            <Form
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
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
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
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    }
}