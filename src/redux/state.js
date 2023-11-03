let store = {
    _state: {
        profilePage:{
            posts: [
                {id:1, message:'Hi', likesCount: 12 },
                {id:2, message:'Hey', likesCount: 11 },
            ],
            newPostText: 'React'
        },
        dialogsPage:{
            messages:[
                {id:1, message:'Hi'},
                {id:2, message:'Hey'},
                {id:3, message:'Yo'}
            ],
            dialogs: [
                {id:1, name:'Dimych'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sveta'},
                {id:4, name:'Sasha'},
                {id:5, name:'Viktor'},
                {id:6, name:'Valera'}
            ]
        }
    },
    _callSubscriber() {
        console.log("wadfghn")
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    _addPost(postMessage)  
    {
        let newPost = {
            id : 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText)
    {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if(action.type === 'ADD-POST')
        {
            this._addPost();
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT') 
        {
            this._updateNewPostText(action.newText);
        }
    }

}

  export default store;
  window.store = store;