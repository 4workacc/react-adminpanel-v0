interface IRootState {
    curPage:string,
    usersList?:IUserInfoProps[]
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
    employer?: string
}

