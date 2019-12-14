import {combineReducers, createStore} from "redux";
import profileReducer from "../reducers/profileReducer";
import dialogsReducer from "../reducers/dialogsReducer";
import sidebarReducer from "../reducers/sidebarReducer";
import newsReducer from "../reducers/newsReducer";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    news: newsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(redusers);

export default store;