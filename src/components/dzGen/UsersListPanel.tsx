import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserInfo } from './UserInfo';

const UsersListPanel:React.FC = () => {
    const storeUsersList = useSelector((state: IRootState) => state.usersList) || [];
    const [ shownUsers, setShownUsers ] = useState<IUserInfoProps[]>([]);

    return (
        <div className="UserInfoPanel">
            {  
                storeUsersList.map ((el) => {
                    return <UserInfo
                        key = {el.id}
                        id = {el.id}
                        fio = {el.fio}
                        code0 = {el.code0}
                        code1 = {el.code1}
                        employer = {el.employer} />
                })  
            }                  
        </div>
    )
}

export default UsersListPanel;