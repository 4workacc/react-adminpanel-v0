import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { RemoveUser } from '../../store/actions/RemoveUser';

export const UserInfo:React.FC<IUserInfoProps> = ({id, fio, code0, code1, employer} : IUserInfoProps) => {
    const dispatch:Dispatch<any>  = useDispatch();
    return (
        <div className = "UserInfo">
            <div>
                <p>FIO : {fio}</p>
                <p>code0: {code0}</p>
                <p>code1 : {code1}</p>
                <p>employer: {employer}</p>
                <button
                    onClick = {()=>{
                        dispatch ( RemoveUser(id!) )
                    }}>CloseUserTab</button>
            </div>
          
        </div> 
    )
}