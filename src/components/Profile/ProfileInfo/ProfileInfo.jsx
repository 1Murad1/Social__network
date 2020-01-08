import React from "react";
import s from "./profileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./PorfileStatusWithHooks/ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.jpg";
import ProfileData from "./ProfileData/ProfileData";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if(!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {

        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        console.log(formData)
        setEditMode(false)
    }

    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img src="https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg" alt="banner" />*/}
            {/*</div>*/}
            <div className={s.descrBlock}>
                <img src={profile.photos.large || userPhoto } className={s.mainPhoto} alt="avatar" /> <br />
                {isOwner && <input  type={"file"}  onChange={onMainPhotoSelected} />} <br />

                {editMode ? <ProfileDataForm profile={profile}
                                             onSubmit={onSubmit}
                                             goToEditMode={() => setEditMode(true)} />
                                : <ProfileData profile={profile}
                                               goToEditMode={() => setEditMode(true)}
                                               isOwner={isOwner} />}

            </div>
            <ProfileStatusWithHooks status = {status}  updateStatus={updateStatus} />
        </div>
    )
}


export default ProfileInfo;