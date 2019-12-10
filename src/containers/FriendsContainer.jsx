import React from 'react';
import {addFriendActionCreator, updateNewFriendActionCreator} from "../actions/SidebarAction";
import {connect} from "react-redux";
import Friends from "../components/Friends/Friends";

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFriend: () => {
            dispatch(addFriendActionCreator())
        },
        updateNewFriend: (friend) => {
            dispatch(updateNewFriendActionCreator(friend))
        }
    }
};

const FriendsContainer = connect (mapStateToProps, mapDispatchToProps) (Friends);

export default FriendsContainer;