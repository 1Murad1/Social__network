import {initializedSuccess} from "../type_action/type_action";

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case initializedSuccess:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;