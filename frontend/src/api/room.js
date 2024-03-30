import request from "../config/request";
//API
const API = {
    ROOMLIST : "/room/roomlist",
    UPDATEROOM : "/room/updateroom",
    SEARCHROOMLIST : "/room/searchroomlist",
    DELETEROOM: "/room/deleteroom",
    ADDROOM: "/room/addroom"
}
//currentUser
const roomList = (data)=> request.get(API.ROOMLIST);

const updateRoom = (data)=> request.post(API.UPDATEROOM,data);

const searchRoomList = (data)=> request.post(API.SEARCHROOMLIST,data);
//删除预约
const deleteRoom = (data)=> request.get(API.DELETEROOM+"?id="+data);
//add
const addRoom = (data)=> request.post(API.ADDROOM,data);
const api = {
      roomList,
      updateRoom,
      searchRoomList,
      deleteRoom,
      addRoom
}

export default api;