export default {
    state:{
        currentUser: null
    },
    actions:{
        setCurrentUser(newState,action){
             newState.currentUser = action.val;
        },
    },
    //注册方法名称
    actionNames: {
        setCurrentUser:"setCurrentUser",

    }
}