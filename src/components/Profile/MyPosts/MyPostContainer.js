import React from "react";
import MyPost from "./MyPost.js";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer.js";

const MyPostContainer = (props) => {
  let state = props.store.getState();


  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action =  updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }

    return( 
     
      <MyPost updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
}
export default MyPostContainer;