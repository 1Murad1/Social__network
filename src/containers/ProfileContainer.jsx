import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {getUserProfileThunkCreator} from "../actions/ProfileAction";
import Profile from "../components/Profile/Profile";
import {usersApi} from "../Api/api";

class ProfileContainer extends React.Component {

    componentDidMount () {

        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 2;
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

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfileThunkCreator}) (withUrlDataContainerComponent);