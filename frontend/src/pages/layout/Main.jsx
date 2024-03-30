import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import './Main.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import Setting from "./setting/index.jsx"
const { Header, Sider, Content } = Layout;


const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {currentUser} = useSelector((state)=>({
    currentUser: state.UserStore.currentUser
}))
  const {role} = useSelector((state)=>({
    role: state.UserStore.role
}))

  const getItems = (label,item,key,children)=>{
    return {label,item,key,children}
  }

  useEffect(()=>{
    if(currentUser!=null){
       console.log("user is login")
    }else{
       navigate('/login')
    }
  })

  const items = [
    getItems('个人中心',<UserOutlined />,'/user',
         [
          getItems('个人信息',<UserOutlined />,'/userinfo'),
          getItems('修改密码',<UserOutlined />,'/userupdate'),
         ]
    ),
    getItems('自习教室选择',<VideoCameraOutlined />,'/room',
         [
          getItems('自习教室列表',<UserOutlined />,'/roomlist'),
          getItems('自习教室推荐',<UserOutlined />,'/roomrecommend')
         ]
    ),
    getItems('学生自习预约管理',<UploadOutlined />,'/record',
         [
          getItems('自习预约',<UserOutlined />,'/appointment')
         ] 
    ),           
  ]

  const items2 = [
    getItems('个人中心',<UserOutlined />,'/user',
         [
          getItems('个人信息',<UserOutlined />,'/userinfo'),
          getItems('修改密码',<UserOutlined />,'/userupdate'),
         ]
    ),
    getItems('自习教室选择',<VideoCameraOutlined />,'/room',
         [
          getItems('自习教室列表',<UserOutlined />,'/roomlist'),
          getItems('自习教室推荐',<UserOutlined />,'/roomrecommend')
         ]
    ),
    getItems('自习教室管理',<VideoCameraOutlined />,'/roommanager',
         [
          getItems('预约审批',<UserOutlined />,'/approve'),
          getItems('教室管理',<UserOutlined />,'/manage')
         ]
    )        
  ]

  const onClick = (e) =>{
    navigate(e.key)
  }

  const navigate = useNavigate();

  return (
    <Layout id="MainBox" >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" id='MainTitle'>
          <img src="/imgs/logo.png" alt="" id="logo" /><span id={collapsed?'titleHide':'title'}>教室预约系统</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['userinfo']}
          items={role>0?items2:items}
          selectedKeys={[]}
          defaultOpenKeys={['/user']}
          onClick={ onClick }
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className='header'
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            // onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Setting></Setting>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Main;