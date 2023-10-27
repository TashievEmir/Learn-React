
  let state = {
    profilePage:{
        posts: [
            {id:1, message:'Hi', likesCount: 12 },
            {id:2, message:'Hey', likesCount: 11 },
        ]
    },
    messagesPage:{
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
  }

 export let addPost = (postMessage) => {
    let newPost = {
        id : 3,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
  }
  export default state;