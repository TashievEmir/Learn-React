import React from "react";
import s from './Profile.module.css'
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =(props)=>{
    return (
      <div className={s.content}>
        <ProfileInfo/>
        <MyPostContainer store={props.store}/>
        {/* <MyPost profilePage={props.profilePage} dispatch={props.dispatch} /> */}
      </div>
    )
}
 
export default Profile;