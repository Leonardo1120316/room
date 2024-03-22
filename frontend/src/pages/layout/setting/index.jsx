import './index.css'
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
const Setting = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {currentUser} = useSelector((state)=>({
        currentUser: state.UserStore.currentUser
    }))

    const onClick = async(e)=>{
        await dispatch({type:"setCurrentUser",val: null})
        if(!currentUser){
            console.log(currentUser)
            navigate('/login')
        }
    }

    const items = [
        {
            label: (
              <a>
                退出登录
              </a>
            ),
            key: '0',
          }
    ]

    return (
        <div className='setting' >
            {/* <Avatar  icon={<UserOutlined />} className='item1' /> */}
            <Dropdown
                menu={{
                    items,onClick
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space className='item2'>
                        退出登录
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}
export default Setting;