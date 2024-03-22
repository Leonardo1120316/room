import { combineReducers, legacy_createStore } from "redux";
import UserStore from "./user/reducer.js"
import RoomStore from "./room/reducer.js"

//合并模块
const reducers = combineReducers({
    UserStore,
    RoomStore
})

//创建仓库
const store = legacy_createStore(reducers)

export default store