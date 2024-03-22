import request from "../config/request";
//API
const API = {
    USERINFO : "/user/userinfo",
}
//currentUser
const userInfo = (data)=> request.get(API.USERINFO+"?id="+data);

const api = {
      userInfo
}

export default api;