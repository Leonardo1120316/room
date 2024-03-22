import React, { useEffect, useState } from 'react';
import { Descriptions, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css'
import api from '../../../api/user'
import { useDispatch, useSelector } from "react-redux"

const UserInfo = ()=>{
    const {currentUser} = useSelector((state)=>({
      currentUser: state.UserStore.currentUser
    }))


    const [userInfo,setUserInfo] = useState({})

    useEffect(()=>{
        async function runEffect(){
          await api.userInfo(currentUser).then((res)=>{
              setUserInfo(res.user)
            }).catch((err)=>{
              console.log(err)
            })
        }
      runEffect();
    })
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
      
    return(
        <div className='outBox'>
            <div>
                <Avatar size={64} icon={<UserOutlined />} className='avatar' src={userInfo.userAvatar} />
                <Button type='primary' className='btn'>修改</Button>
            </div>
            <Descriptions title="个人信息" items={items} column={2}/>
            <Descriptions title="介绍" items={itemsIntroduce} column={2} />
        </div>
    )
}
export default UserInfo