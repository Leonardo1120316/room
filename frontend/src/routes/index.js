import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../pages/login/login/login.jsx'
import Register from '../pages/login/register/register.jsx'
import Main from '../pages/layout/Main.jsx'
import UserInfo from '../pages/user/UserInfo/UserInfo.jsx'
import UserUpdate from '../pages/user/UserUpdate/UserUpdate.jsx'
import Appointment from '../pages/appointment'
import RoomList from '../pages/room/RoomList'
import RoomRecommend from '../pages/room/RoomRecommend'
import Approve from '../pages/admin/Approve'
import Manage from '../pages/admin/Manage'

export default () => (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Main/>} >
           <Route path="/userinfo" element={<UserInfo/>} />
           <Route path="/userupdate" element={<UserUpdate/>} />
           <Route path="/appointment" element={<Appointment/>} />
           <Route path="/roomlist" element={<RoomList/>} />
           <Route path="/roomrecommend" element={<RoomRecommend/>} />
           <Route path="/manage" element={<Manage/>} />
           <Route path="/approve" element={<Approve/>} />
        </Route>
    </Routes>
);