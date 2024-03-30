import request from "../config/request";
//API
const API = {
    RECORDLIST : "/record/recordlist",
    SEARCHRECORDLIST : "/record/searchrecordlist",
    ADDRECORD : "/record/addrecord",
    DELETERECORD : "/record/deleterecord",
    EDITRECORD: "/record/updaterecord"
}
//获取预约记录
const recordList = (data)=> request.get(API.RECORDLIST);
//获取预约记录
const searchRecordList = (data)=> request.post(API.SEARCHRECORDLIST,data);
//新建预约
const addRecord = (data)=> request.post(API.ADDRECORD,data);
//删除预约
const deleteRecord = (data)=> request.get(API.DELETERECORD+"?id="+data);
//修改预约
const editRecord = (data)=> request.post(API.EDITRECORD,data);
const api = {
      recordList,
      addRecord,
      deleteRecord,
      searchRecordList,
      editRecord
}

export default api;