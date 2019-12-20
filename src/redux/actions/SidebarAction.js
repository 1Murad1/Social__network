import {addFriend, updateNewFriend} from "../type_action/type_action";

export const addFriendActionCreator = () => ({type: addFriend});

export const updateNewFriendActionCreator = (name) => ({type: updateNewFriend, name: name});