import { initState } from './initState';

const initRed = (
    state: IRootState = initState,
    action: IRootAction
):IRootState => {
    switch (action.type) {
        case "AddUser" : {    
            let qq:IUserInfoProps[] = [];
            state.usersList?.map((el:any) => {
                qq.push(el)
            });
            qq.push(action.userObj||{})
            return {                
                ...state,
                usersList: qq
            }             
        } 
        default:
            return state
    }
}

export default initRed;