import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserInfo } from './UserInfo';

export const UsersListPanel:React.FC = () => {
    const storeUsersList = useSelector((state: IRootState) => state.usersList) || [];
    const [shownUserList, setShownUserList] = useState<IUserInfoProps[] | []>([]);

    useEffect(() => {
        setShownUserList(storeUsersList || []);
    }, [storeUsersList]);

    return (
        <div className="UserInfoPanel">
            {shownUserList!.map((el: IUserInfoProps) => {
                return (
                    <UserInfo
                        fio={el.fio}
                        code0={el.code0}
                        code1={el.code1}
                        employer={el.employer} />
                )
            })}
        </div>
    )
}