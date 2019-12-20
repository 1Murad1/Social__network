import {addPost, updateNewPostText, setUserProfile} from "../type_action/type_action";

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
    newPostText: "Front end developer",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            };
        case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            };
        case setUserProfile:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;