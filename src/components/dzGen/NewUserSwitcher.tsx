import React, { useState } from 'react';

export const NewUserSwitcher:React.FC = () => {
    const [ isNewUser, switchNewUser ] = useState<boolean>(false);
    return (
        <div>
           <div className="isNewUserPanel">
                <label>
                    <input
                        type="radio"
                        name="isNewUserPanel"
                        onChange={() => { switchNewUser(false)}}></input>
                    Существующий сотрудник
                </label>
                <label>
                    <input
                        type="radio"
                        name="isNewUserPanel"
                        onChange={() => { switchNewUser(true) }}></input>
                    Новый сотрудник
                </label>
            </div>

            {
                isNewUser&&
                    <div>
                        <input 
                            type = "text"
                            placeholder = "enter new user fio"></input>
                        <button>
                            Add user to dz
                        </button>
                    </div>
            }
            {
                !isNewUser&&
                    <div>
                        <input 
                            type = "number"
                            placeholder = "enter code 0"></input>
                        <input  
                            type = "number"
                            placeholder = "or enter code 1"></input>
                        <input 
                            type = "text"
                            placeholder = "or FIO"></input>
                        <button>Add user to dz</button>
                    </div>
            }
        </div>
    )
}