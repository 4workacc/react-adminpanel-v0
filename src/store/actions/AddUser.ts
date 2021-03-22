export const AddUser = ( newUser:IUserInfoProps ) => {    
    return {
        type : "AddUser",
        userObj : newUser
    }
}