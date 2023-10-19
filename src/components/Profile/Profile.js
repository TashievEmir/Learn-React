import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
const Profile =()=>{
    return (
      <div className={s.content}>
        <div>
          <img src='https://miro.medium.com/v2/resize:fit:1041/1*VF9U66X8-r5zs3YD8P25ig.jpeg' height={350} width={700} />
        </div>
        <div>
          ava+desc
          <img src='https://i.pinimg.com/236x/e6/81/9f/e6819f4fe20b50687be460d2b0b0359c.jpg' height={150} width={150} />
        </div>
        <MyPost />
      </div>
    )
}

export default Profile;