import React from "react";
import {addPostActionCreator} from "../redux/actions/ProfileAction";
import {connect} from "react-redux";
import MyPost from "../components/Profile/MyPost/MyPost";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
};

const MyPostContainer = connect (mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;