import { initState } from './initState';

export const initRed = (
    state: IRootState = initState,
    action: iRootAction
) => {
    switch (action.type) {
        case "AddUser" : {
            let users = state.usersList;

            let newUser: IUserInfoProps = {
                id : users!.length,
                fio: action.fio || "",
                code0: action.code0 || -1,
                code1 : action.code1 || -1,
                employer: action.employer || ""
            };

            users?.push ( newUser );
            return {
                ...state,
                userList : users                
            }
        }
        default:
            return state
    }
}