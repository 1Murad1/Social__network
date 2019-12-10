import {addFriend, updateNewFriend} from "../reducers/sidebarReducer";

export const addFriendActionCreator = () => ({type: addFriend});

export const updateNewFriendActionCreator = (name) => ({type: updateNewFriend, name: name});