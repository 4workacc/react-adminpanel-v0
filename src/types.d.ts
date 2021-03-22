interface IRootState {
    curPage:string,
    usersList?:IUserInfoProps[]
}
interface iRootAction {
    type:string,
    id?: number,
    fio?: string,
    code0?: number,
    code1?: number,
    employer?: string
}

interface IUserInfoProps {
    id?: number,
    fio: string,
    code0: number,
    code1: number,
    employer: string
}