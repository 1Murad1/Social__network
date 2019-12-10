import React from "react";
import s from "./myPost.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPost = (props) => {
    let postElements = props.postData.map(p => <Post message = {p.message} likesCount = {p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.myPost}>
            <h3>MyPost</h3>
            <div className={s.form}>
                <textarea ref = {newPostElement} onChange={onPostChange} value={props.newPostText} />
                <div>
                    <button onClick={addPost}>addPost</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPost;