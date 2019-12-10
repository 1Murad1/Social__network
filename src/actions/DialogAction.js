import {addMessage, updateNewMessage} from "../reducers/dialogsReducer";

export const addMessageActionCreator = () => ({type: addMessage});

export const updateNewMessageActionCreator = (message) => ({type: updateNewMessage, newMessage: message});
