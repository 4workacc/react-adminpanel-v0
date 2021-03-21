import React, { useState } from 'react';

export const RightCathegory:React.FC = () => {

    const [ rightType, setRightType ] = useState<number>(0);
    return (
        <div>
            <label>
                <input  
                    type = "radio"
                    name = "rightcat"
                    onChange = { () => {setRightType(0);}}/>
                    Right emp
            </label>
            <label>
                <input  
                    type = "radio"
                    name = "rightcat" 
                    onChange = { () => {setRightType(1);}}/>
                    Right main
            </label>
            <label>
                <input  
                    type = "radio"
                    name = "rightcat" 
                    onChange = { () => {setRightType(2);}}/>
                    Right custom
            </label>
            {
                rightType===2 && 
                    <div>
                        categories
                    </div>
            }
        </div>
    )
}