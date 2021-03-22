interface IRootState {
    curPage:string,
    fullUsersList: IUserInfoProps[], //полный список пользователей
    usersList?:IUserInfoProps[] //список добавляемых в дз
}
interface IRootAction {
    type:string,
    userObj? : IUserInfoProps,
    deletingUser?: number
}

interface IUserInfoProps {
    id?: number,
    fio?: string,
    code0?: number,
    code1?: number,
    employer?: string,
    trans?:string;
}

