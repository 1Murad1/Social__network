import React from "react";
import s from "./header.module.css";
import {NavLink} from "react-router-dom";

const  Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/ru/2/27/Hockey_Club_Amur_logo.png" alt="logo" />
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}  <button onClick={props.logout}>log out</button></div> : <NavLink to="/login">Login</NavLink>}
            </div>
        </div>
    )
}

export default Header;