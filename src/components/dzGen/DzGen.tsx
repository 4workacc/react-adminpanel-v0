import React from 'react';

import './dzGen.scss';

import { NewUserSwitcher } from './NewUserSwitcher';
import { RightCathegory } from './RightCathegory';
import { StaticRightsSwitcher } from './StaticRightsSwitcher';
import  UsersListPanel  from './UsersListPanel';

export const DzGen = () => {
    
      return (
        <div id="DzGen">
            <NewUserSwitcher />          
            <UsersListPanel />
                   
            <div className="typesOfRights">

            </div>
            <div className="manualRightsPanel">

            </div>
 
            <hr></hr>
            <button className="dzGenBut">GeneratePDF</button>
        </div>
    )
}