import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Viktor' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="Hey" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id

     return (
         <div className={s.dialog + ' ' + s.active}>
             <NavLink to={path} className={({ isActive }) =>
                 isActive ? s.active : s.link
             }>{props.name}</NavLink>
         </div>
     )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export default Dialogs;
