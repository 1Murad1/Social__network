import React from "react";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "../../containers/MyPostContainer";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         saveProfile={props.saveProfile}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto} />
            <MyPostContainer />
        </div>
    )
}

export default Profile;