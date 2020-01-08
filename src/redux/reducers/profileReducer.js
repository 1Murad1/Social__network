import {addPost, setUserProfile, setStatus, deletePost, savePhotoSuccess} from "../type_action/type_action";

let initialState = {
    postData: [
        {
            id: 1,
            message: "I'm ReactJs developer!",
            likesCount: 5
        },
        {
            id: 2,
            message: "I'm programist!!!",
            likesCount: 15
        }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            };
        case setUserProfile:
            return {
                ...state,
                profile: action.profile
            };
        case setStatus:
            return {
                ...state,
                status: action.status
            };
        case deletePost:
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
            };
        case savePhotoSuccess:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export default profileReducer;