import request from "../config/request";
//API
const API = {
    LOGIN : "/user/login",
    REGISTER : "/user/register",
}
//login
const login = (data)=> request.post(API.LOGIN,data);
//register
const register = (data)=> request.post(API.REGISTER,data);

const api = {
      login,
      register,
}

export default api;