import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter, Redirect} from "react-router-dom"
import {getUserProfileThunkCreator} from "../redux/actions/ProfileAction";
import Profile from "../components/Profile/Profile";
import {usersApi} from "../Api/api";
import {WithAuthRedirect} from "../components/HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount () {

        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 5325;
        }

        this.props.getUserProfileThunkCreator(userId)
    }

    render() {
         return (
             <Profile {...this.props} profile={this.props.profile} />
         )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose (
    connect (mapStateToProps, {getUserProfileThunkCreator}),
    withRouter,
    WithAuthRedirect
) (ProfileContainer)


