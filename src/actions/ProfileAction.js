import {addPost, setUserProfile, updateNewPostText} from "../reducers/profileReducer";

export const addPostActionCreator = () => ({type: addPost});

export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});

export const setUserProfileActionCreator = (profile) => ({type: setUserProfile, profile: profile});