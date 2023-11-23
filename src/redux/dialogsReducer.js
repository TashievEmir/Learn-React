const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages:[
        {id:1, message:'Hi'},
        {id:2, message:'Hey'},
        {id:3, message:'Yo'}
    ],
    newMessageBody:"",
    dialogs: [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Valera'}
    ]
}

 const dialogsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:4, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY: 
        state.newMessageBody = action.body;
            return state;
        default: 
            return state;
    }
}

export const sendMessageCreator = (text) => {
    return {
      type: SEND_MESSAGE
    }
  }  

  export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
    }
  }

export default dialogsReducer;