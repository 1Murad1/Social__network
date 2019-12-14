import {setUserData} from "../reducers/authReducer";

export const setAuthUserDataActionCreator = (id, email, login) => ({type: setUserData, data: {id, email, login}});
