import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserInfo } from './UserInfo';

const UsersListPanel:React.FC = () => {
    const storeUsersList = useSelector((state: IRootState) => state.usersList) || [];
    const [ shownUsers, setShownUsers ] = useState<IUserInfoProps[]>([]);

    return (
        <div className="UserInfoPanel">
            <ul>
            {  
                storeUsersList.map ((el) => {
                    return  <li>
                                <UserInfo
                                    key = {el.id}
                                    id = {el.id}
                                    fio = {el.fio}
                                    code0 = {el.code0}
                                    code1 = {el.code1}
                                    employer = {el.employer}
                                    trans = {el.trans} />  
                            </li>                                         
                                                 
                                   
                })  
            }    
            </ul>
                         
        </div>
    )
}

export default UsersListPanel;