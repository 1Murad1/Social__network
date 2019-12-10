import React from 'react';
import s from "./messages.module.css";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <div className="item">
                {props.message}
            </div>
        </div>
    )
}

export default Messages;