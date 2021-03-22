export const RemoveUser = ( userID: number ) => {    
    return {
        type : "RemoveUser",
        deletingUser : userID
    }
}