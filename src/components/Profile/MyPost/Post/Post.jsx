import React from "react";
import s from "./post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-1.jpg" alt="avatar_post" />
            {props.message}
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
