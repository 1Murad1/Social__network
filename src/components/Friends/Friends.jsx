import React from 'react';
import s from "./friends.module.css";
import Friend from "./Friend/Friend";
import {Redirect} from "react-router-dom";

const Friends = (props) => {

    let friendElements = props.sidebar.friendsData.map(u => <Friend name={u.name} lastName={u.lastName} avatar={u.avatar} />)

    let newFriendsElements = React.createRef();

    let addFriends = () => {
        props.addFriend();
    }

    let onFriendChange = () => {
        let friend = newFriendsElements.current.value;
        props.updateNewFriend(friend);
    }

    if(!props.isAuth) return <Redirect to = "/login" />

    return (
        <div className={s.friends}>
            <h2>My Friends</h2>
            <div className={s.friend}>
                {friendElements}
            </div>
            <textarea ref= {newFriendsElements} onChange={onFriendChange} value={props.sidebar.newFriend} />
            <button onClick={addFriends}>addFriend</button>
        </div>
    )
}

export default Friends;