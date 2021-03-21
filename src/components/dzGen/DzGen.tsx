import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserInfo } from './UserInfo';

import './dzGen.scss';
import { NewUserSwitcher } from './NewUserSwitcher';

export const DzGen = () => {
    const storeUsersList = useSelector((state: IRootState) => state.usersList) || [];
    const [shownUserList, setShownUserList] = useState<IUserInfoProps[] | []>([]);

    useEffect(() => {
        setShownUserList(storeUsersList || []);
    }, [storeUsersList]);

      return (
        <div id="DzGen">
            <NewUserSwitcher />          
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
            <div className="IsStaticRightsPanel">

            </div>
            <div className="tempTransferPanel">

            </div>
            <div className="typesOfRights">

            </div>
            <div className="manualRightsPanel">

            </div>
            <button className="dzGenBut">GeneratePDF</button>
        </div>
    )
}