import request from "../config/request";
//API
const API = {
    ROOMLIST : "/room/roomlist",
    UPDATEROOM : "/room/updateroom",
}
//currentUser
const roomList = (data)=> request.get(API.ROOMLIST);

const updateRoom = (data)=> request.post(API.UPDATEROOM,data);
const api = {
      roomList,
      updateRoom
}

export default api;