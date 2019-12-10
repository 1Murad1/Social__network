import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../actions/ProfileAction";
import {connect} from "react-redux";
import MyPost from "../components/Profile/MyPost/MyPost";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text))
        }
    }
};

const MyPostContainer = connect (mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;