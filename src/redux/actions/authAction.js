import {setUserData} from "../type_action/type_action";
import {authApi} from "../../Api/api";
import {stopSubmit} from "redux-form";

export const setAuthUserDataActionCreator = (id, email, login, isAuth) => ({type: setUserData, payload: {id, email, login, isAuth}});

export const meThunkCreator = () => async (dispatch) => {
       let response = await authApi.me()
             if(response.data.resultCode === 0) {
                 let {id, email, login} = response.data.data
                 dispatch(setAuthUserDataActionCreator(id, email, login, true))
             }
    }


export const login = (email, password, rememberMe) => async  (dispatch) => {
        let response = await authApi.login(email, password, rememberMe)
            if(response.data.resultCode === 0) {
                dispatch(meThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}))
            }
    }

export const logout = () => async  (dispatch) => {
        let response = await authApi.logout()
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserDataActionCreator(null, null, null, false))
            }
    }
