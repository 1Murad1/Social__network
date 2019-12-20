import {addPost, setUserProfile, updateNewPostText} from "../type_action/type_action";
import {usersApi} from "../../Api/api";

export const addPostActionCreator = () => ({type: addPost});

export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});

export const setUserProfileActionCreator = (profile) => ({type: setUserProfile, profile: profile});

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId)
        .then(response => {
                dispatch(setUserProfileActionCreator(response.data))
            }
        )
    }
}
