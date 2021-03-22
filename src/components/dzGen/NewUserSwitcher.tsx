import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../../store/actions/AddUser';

export const NewUserSwitcher:React.FC = () => {
    const [ isNewUser, switchNewUser ] = useState<boolean>(false);

    const [ userFIO, setUserFIO ] = useState<string>("");
    const [ userCode0, setUserCode0 ] = useState<number>(-1);
    const [ userCode1, setUserCode1 ] = useState<number>(-1);
    const [ userEmployer, setUserEmployer ] = useState<string>("");
    const [ userTrans, setUserTrans ] = useState<string>("");

    const fullUserList = useSelector((state:IRootState) => state.fullUsersList);
    const usersInDz = useSelector((state:IRootState) => state.usersList);

    const dispatch = useDispatch(); 
    useEffect(()=>{
       fullUserList.map(( el:IUserInfoProps ) => {
           if (el.fio === userFIO ) {
               setUserCode0(el.code0 || -1);
               setUserCode1(el.code1 || -1);
               setUserEmployer( el.employer || "emp10" );
               setUserTrans( el.trans || "")
           }
       })
    },[userFIO]);
    return (
        <div>
           <div className="isNewUserPanel"></div>       
                    <div>
                    <input 
                        type="text" 
                        list="usersFIO"
                        onChange = {(e)=>{setUserFIO(e.target.value)}} />
                        <datalist id="usersFIO">
                           {             
                                fullUserList.map (( el ) => {
                                    return <option >{el.fio}</option>  
                                })                    
                                                         
                           }
                        </datalist>
                        <input 
                            type = "number"
                            placeholder = "enter code 0"
                            value = {userCode0}></input>
                        <input  
                            type = "number"
                            placeholder = "or enter code 1"
                            value = {userCode1}></input>
                        <input
                            type ="text"
                            placeholder = "and transcribtion"
                            value = {userTrans}
                            ></input>                       
                        <input 
                            type = "text"
                            placeholder = "emp"
                            list = "emps"
                            value = {userEmployer}/>         
                            <datalist id = "emps">           
                                <option>emp0</option>
                                <option>emp1</option>
                                <option>emp2</option>
                                <option>emp3</option>
                                <option>emp4</option>
                            </datalist> 
                        
                    </div>
                    <button
                        onClick = { () => 
                            {            
                                if ( userFIO === "" ) {
                                    alert("None empty fio")
                                }
                                else {
                                        let isIn:boolean = false; 
                                        usersInDz!.map ((el:IUserInfoProps) => {
                                            if (el.fio === userFIO) {
                                                isIn = true;                                                
                                            }
                                        })
                                        if ( isIn ) {
                                            alert("User in dz") ;
                                        }
                                        else {
                                            let newUser:IUserInfoProps = {
                                                id : Math.random()*1000,
                                                fio: userFIO,
                                                code0 : userCode0,
                                                code1: userCode1,
                                                employer: userEmployer,
                                                trans: userTrans
                                            }               
                                            dispatch( AddUser( newUser ) );
                                                setUserFIO("");
                                                setUserCode0(-1);
                                                setUserCode1(-1);
                                                setUserTrans("");
                                                setUserEmployer("")
                                        }                                    
                                }                           
                            }
                    }       >Add user to dz</button>
            
        </div>
    )
}