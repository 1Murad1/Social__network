import React from "react";
import s from "./profileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img src="https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg" alt="banner" />*/}
            {/*</div>*/}
            <div className={s.descrBlock}>
                <img src={props.profile.photos.large} alt="avatar" /> <br />
                <span>{props.profile.fullName}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;