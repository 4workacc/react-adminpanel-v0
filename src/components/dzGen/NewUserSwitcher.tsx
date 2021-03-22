import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../../store/actions/AddUser';

export const NewUserSwitcher:React.FC = () => {
    const [ isNewUser, switchNewUser ] = useState<boolean>(false);

    const cc = useSelector((state:IRootState) => state.usersList);

    const dispatch = useDispatch(); 

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
                        <button
                            onClick = { () => 
                                {                     
                                    let newUser:IUserInfoProps = {
                                        id : Math.random()*1000,
                                        fio: "QWEQWEQWEQWE",
                                        code0 : 123123213,
                                        code1: 13123123123,
                                        employer: "xzczxcxzc"
                                    }               
                                    dispatch( AddUser( newUser ) );
                                }
                            }                                                 
                            >
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