import React from 'react';

import './dzGen.scss';

import { NewUserSwitcher } from './NewUserSwitcher';
import { UsersListPanel } from './UsersListPanel';

export const DzGen = () => {
    
      return (
        <div id="DzGen">
            <NewUserSwitcher />          
            <UsersListPanel />
                   
            <div className="typesOfRights">

            </div>
            <div className="manualRightsPanel">

            </div>
            <button className="dzGenBut">GeneratePDF</button>
        </div>
    )
}