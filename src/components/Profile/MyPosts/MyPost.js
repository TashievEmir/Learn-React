import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.js";

const MyPost = (props) => {
  
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return( 
      <div className={s.postsBlock}>
        My post
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    )
}
export default MyPost;