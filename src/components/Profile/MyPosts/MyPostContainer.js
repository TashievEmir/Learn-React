import React from "react";
import MyPost from "./MyPost.js";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer.js";
import {connect} from "react-redux";

// const MyPostContainer = (props) => {
//   let state = props.store.getState();


//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => {
//     let action =  updateNewPostActionCreator(text);
//     props.store.dispatch(action);
//   }

//     return(      
//       <MyPost updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
//     )
// }

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    updateNewPostText: (text) => {
          dispatch(updateNewPostActionCreator(text));
      },
      addPost: () => {
          dispatch(addPostActionCreator());
      }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;