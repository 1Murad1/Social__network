import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../actions/DialogAction";
import {connect} from "react-redux";
import Dialogs from "../components/Dialogs/Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessage: (message) => {
            dispatch(updateNewMessageActionCreator(message))
        }
    }
};

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;