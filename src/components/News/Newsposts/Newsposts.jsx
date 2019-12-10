import React from "react";
import s from "./newsposts.module.css";

const Newsposts = (props) => {
    return (
        <div className={s.item}>
            <img src={props.imgSrc} alt="newsPicture" />
            <p>{props.newsPost}</p>
        </div>
    )
}

export default Newsposts;