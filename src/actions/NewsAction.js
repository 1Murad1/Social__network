import {addNews, updateNewNews} from "../reducers/newsReducer";

export const addNewsActionCreator = () => ({type: addNews});

export const updateNewNewsActionCreator = (news) => ({type: updateNewNews, newPostNews: news});