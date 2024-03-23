import request from "../config/request";
//API
const API = {
    RECORDLIST : "/record/recordlist",
    ADDRECORD : "/record/addrecord",
    DELETERECORD : "/record/deleterecord",
}
//获取预约记录
const recordList = (data)=> request.get(API.RECORDLIST);
//新建预约
const addRecord = (data)=> request.post(API.ADDRECORD,data);
//删除预约
const deleteRecord = (data)=> request.get(API.DELETERECORD+"?id="+data);
const api = {
      recordList,
      addRecord,
      deleteRecord
}

export default api;