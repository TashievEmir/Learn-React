import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =(props)=>{
    return (
      <div className={s.content}>
        <ProfileInfo/>
        <MyPost posts={props.posts} addPost={props.addPost} />
      </div>
    )
}

export default Profile;