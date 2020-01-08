import React from 'react';
import {addMessageActionCreator} from "../redux/actions/DialogAction";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../components/HOC/withAuthRedirect";
import Dialogs from "../components/Dialogs/Dialogs";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
};

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

