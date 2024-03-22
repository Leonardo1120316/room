export default {
    state:{
        currentRoom: {
            id: Number,
            username: String,
            userAccount: String,
            userAvatar: String,
            phone: String,
            email: String,
            integral: Number,
            introduce: String,
        }
    },
    actions:{
        testRoom(newState,action){
             console.log("set")
        }
    },
    //注册方法名称
    actionNames: {
        testRoom:"testRoom"
    }
}