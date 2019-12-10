import React from "react";
import s from "./friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src={props.avatar} alt="avatar" />
            <p>{props.name + " " + props.lastName}</p>
        </div>
    )
}

export default Friend;