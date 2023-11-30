import React from "react"
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogsReducer"


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
}

let f1 = () => {
    return{

    }
}
let f2 = () => {
    return{
        
    }
}

const superDialogsContainer = connect(f1, f2)(Dialogs);

export default DialogsContainer;