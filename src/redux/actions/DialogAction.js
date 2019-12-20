import {addMessage, updateNewMessage} from "../type_action/type_action";

export const addMessageActionCreator = () => ({type: addMessage});

export const updateNewMessageActionCreator = (message) => ({type: updateNewMessage, newMessage: message});
