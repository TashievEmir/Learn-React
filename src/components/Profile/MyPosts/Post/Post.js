import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqONNhmK7Ko_7k8I5Vzbo86Vrw_DLluSwFw&usqp=CAU' alt=" "></img>
        {props.message}
        <div>
          <span>Like</span>
        </div>
    </div>
    )
}
export default Post;