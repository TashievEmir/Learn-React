import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo =()=>{
    return (
      <div >
        <div>
          <img src='https://www.manas.edu.kg/upload/logo/Manas_logo.png' height={350} width={700} />
        </div>
        <div className={s.description}>
          ava+desc
          <img src='https://www.manas.edu.kg/upload/logo/Manas_logo.png' height={150} width={150} />
        </div>
      </div>
    )
}

export default ProfileInfo;