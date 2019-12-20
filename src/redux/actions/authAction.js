import {setUserData} from "../type_action/type_action";
import {authApi} from "../../Api/api";

export const setAuthUserDataActionCreator = (id, email, login) => ({type: setUserData, data: {id, email, login}});

export const meThunkCreator = () => {
    return (dispatch) => {
        authApi.me()
        .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataActionCreator(id, email, login))
                }
            }
        )
    }
}
