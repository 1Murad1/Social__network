import {setUserData} from "../type_action/type_action";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUserData:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authReducer;