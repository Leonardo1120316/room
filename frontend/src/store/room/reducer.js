import handleState from './index'

let reducer = (state = {...handleState.state}, action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    for(let key in handleState.actionNames){
        if(action.type === handleState.actionNames[key]){
            handleState.actions[handleState.actionNames[key]](newState,action)
            break;
        }
    }
    return newState;
}
export default reducer