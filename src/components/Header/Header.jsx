import React from "react";
import s from "./header.module.css";

const  Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/ru/2/27/Hockey_Club_Amur_logo.png" alt="logo" />
            </div>
        </div>
    )
}

export default Header;