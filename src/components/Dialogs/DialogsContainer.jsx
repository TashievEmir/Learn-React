import React from "react"
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogsReducer"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
