import React from 'react';
import { RightCathegory } from './RightCathegory';
import { StaticRightsSwitcher } from './StaticRightsSwitcher';

export const CurrentUserRightsPanel = () => {
    return (
        <>
            <StaticRightsSwitcher />
            <RightCathegory />   
        </>
    )
}