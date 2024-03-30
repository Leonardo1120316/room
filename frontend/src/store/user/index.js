export default {
    state:{
        currentUser: null,
        role: null,
    },
    actions:{
        setCurrentUser(newState,action){
             newState.currentUser = action.val;
        },
        setCurrentRole(newState,action){
            newState.role = action.val;
       },
    },
    //注册方法名称
    actionNames: {
        setCurrentUser:"setCurrentUser",
        setCurrentRole:"setCurrentRole",
    }
}