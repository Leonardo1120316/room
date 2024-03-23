import request from "../config/request";
//API
const API = {
    USERINFO : "/user/userinfo",
    UPDATEUSER: "/user/updateuser",
    UPDATEPASSWORD: "/user/updatepassword"
}
//currentUser
const userInfo = (data)=> request.get(API.USERINFO+"?id="+data);

const updateUser = (data)=> request.post(API.UPDATEUSER,data);
//更新密码
const updatePassword = (data)=> request.post(API.UPDATEPASSWORD,data);

const api = {
      userInfo,
      updateUser,
      updatePassword
}

export default api;