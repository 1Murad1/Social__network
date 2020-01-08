import React from "react";
import s from "./../users.module.css";
import userPhoto from "../../../assets/image/user.jpg";
import {NavLink} from "react-router-dom";


const User = ({user, followingIsProgress, unFollow, follow}) => {
    let u = user;
    return (
         <div className={s.item}>
             <div className={s.left_block}>
                 <NavLink to ={"/profile/" + u.id}>
                     <img src={u.photos.large != null ? u.photos.small : userPhoto} alt="avatar_picture" />
                 </NavLink>
                 <div className={s.button}>
                     {u.followed
                         ? <button disabled={followingIsProgress.some(id => id === u.id)} onClick={() => {
                             unFollow(u.id)
                         }}>unfollow</button>
                         : <button disabled={followingIsProgress.some(id => id === u.id)} onClick={() => {
                             follow(u.id)
                         }}>follow</button>}
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
export default User;