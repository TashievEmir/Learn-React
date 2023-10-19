import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.js";
const MyPost = () => {
    return <div>
    My post
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div>
      <Post message='Hi'/>
      <Post message='Hey'/>
    </div>
  </div>
}
export default MyPost;