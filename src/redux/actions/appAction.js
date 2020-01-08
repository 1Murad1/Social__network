import {initializedSuccess} from "../type_action/type_action";
import {meThunkCreator} from "./authAction";


export const initializedSuccessActionCreator = () => ({type: initializedSuccess});

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(meThunkCreator());
        promise.then(
            () => {
                dispatch(initializedSuccessActionCreator())
            })
    }
}
