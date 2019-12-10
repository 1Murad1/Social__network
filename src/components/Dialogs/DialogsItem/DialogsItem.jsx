import React from 'react';
import s from "./dialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className = {s.dialogsItem}>
            <div className = {s.item}>
                <NavLink to = {path}  activeClassName = {s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem;