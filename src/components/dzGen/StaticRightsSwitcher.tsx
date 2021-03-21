import React, { useState } from 'react';

export const StaticRightsSwitcher: React.FC = () => {

    const [ staticRights, switcher ] = useState<boolean>(true); 
    return (
        <div className="IsStaticRightsPanel">
            <div>
                <label>
                    <input
                        type="radio"
                        name="staticRights" 
                        onChange = { () => {switcher(true);}}/>
                    Постоянные права
                </label>
                <label>
                    <input
                        type="radio"
                        name="staticRights" 
                        onChange = { () => {switcher(false);}}/>
                    Временные права
                </label>
            </div>
            {
                !staticRights &&
                    <div>
                        <input
                            type = "datetime-local" 
                            placeholder = "start rights"/>
                        <input
                            type = "datetime-local" />
                    </div>
            }
        </div>
    )
}