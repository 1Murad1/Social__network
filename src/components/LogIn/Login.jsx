import React from "react";
import s from "./login.module.css";

const LogIn = (props) => {
    return (
        <div>
            <h1 className={s.item}>LogIn</h1>

            <form>
                <input type="email" placeholder="@email" required /> <br />
                <input type="password"  placeholder="password"/> <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default LogIn;