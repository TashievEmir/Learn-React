import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div className={s.item}>
        <img src='https://www.manas.edu.kg/upload/logo/Manas_logo.png' alt=" "></img>
        {props.message}
        <div>
          <span>Like</span>
        </div>
    </div>
    )
}
export default Post;