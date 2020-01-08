import {addPost, setStatus, setUserProfile, deletePost, savePhotoSuccess} from "../type_action/type_action";
import {profileApi, usersApi} from "../../Api/api";

export const addPostActionCreator = (newPostText) => ({type: addPost, newPostText: newPostText});

export const setUserProfileActionCreator = (profile) => ({type: setUserProfile, profile: profile});

export const setStatusProfileActionCreator = (status) => ({type: setStatus, status: status})

export const deletePostActionCreator = (postId) => ({type: deletePost, postId: postId});

export const savePhotoSuccessActionCreator = (photos) => ({type: savePhotoSuccess, photos: photos});

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
        let response = await usersApi.getProfile(userId)
            dispatch(setUserProfileActionCreator(response.data))
    }

export const getStatusProfileThunkCreator = (userId) => async (dispatch) => {
        let response = await profileApi.getStatus(userId)
            dispatch(setStatusProfileActionCreator(response.data))
    }

export const updateStatusProfileThunkCreator = (status) => async (dispatch) => {
        let response = await profileApi.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfileActionCreator(status))
            }
    }

export const savePhotoProfileThunkCreator = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessActionCreator(response.data.data.photos))
    }
}

export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId))
    }
}