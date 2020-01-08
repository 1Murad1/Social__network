import React from "react";
import s from "../profileInfo.module.css";
import {createField, Input, Textarea} from "../../../../common/FormControls/FormControls";
import Contact from "../ProfileData/Contact/Contact";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={s.item}>
            <button>save</button>
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>:
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"}) (ProfileDataForm)

export default ProfileDataFormReduxForm;