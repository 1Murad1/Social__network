import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/image/user.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div>
                {pages.map(p => {
                    return <span className = {`${props.currentPage === p && s.selectedPage} ${s.hov}`}
                                 onClick={(e) => {props.onPageChanged(p)}}> {p} </span>
                })}
            </div>
            <h2>Users</h2>
            {
                props.users.map(u => <div className={s.item}>
                    <div className={s.left_block}>
                        <NavLink to ={"/profile/" + u.id}>
                            <img src={u.photos.large != null ? u.photos.small : userPhoto} alt="avatar_picture" />
                        </NavLink>
                        <div className={s.button}>
                            {u.followed ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>unfollowed</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>followed</button>}
                        </div>
                    </div>
                    <div className={s.right_block}>
                        <div className={s.line}>
                            <span>{u.name}</span>
                            <span>{"u.location.country"}</span>
                        </div>
                        <div className={s.line}>
                            <span>{u.status}</span>
                            <span>{"u.location.city"}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;