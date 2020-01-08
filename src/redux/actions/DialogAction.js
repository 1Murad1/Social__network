import {addMessage} from "../type_action/type_action";

export const addMessageActionCreator = (newMessageText) => ({type: addMessage, newMessageText: newMessageText});
