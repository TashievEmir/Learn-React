import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.js";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer.js";

const MyPost = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (el) => {
    let text =  newPostElement.current.value;
    props.updateNewPostText(text);
  }

    return( 
      <div className={s.postsBlock}>
        My post 
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    )
}
export default MyPost;