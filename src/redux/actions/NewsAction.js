import {addNews, updateNewNews} from "../type_action/type_action";

export const addNewsActionCreator = () => ({type: addNews});

export const updateNewNewsActionCreator = (news) => ({type: updateNewNews, newPostNews: news});