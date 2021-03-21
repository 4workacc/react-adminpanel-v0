import React from 'react';
import { RightCathegory } from './RightCathegory';

import { StaticRightsSwitcher } from './StaticRightsSwitcher';

export const UserInfo:React.FC<IUserInfoProps> = ({fio, code0, code1, employer} : IUserInfoProps) => {
    return (
        <div className = "UserInfo">
            <div>
                <p>FIO : {fio}</p>
                <p>code0: {code0}</p>
                <p>code1 : {code1}</p>
                <p>employer: {employer}</p>
                <button>CloseUserTab</button>
            </div>
            <StaticRightsSwitcher />
            <RightCathegory />
        </div> 
    )
}