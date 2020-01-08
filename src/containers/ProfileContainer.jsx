import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter, Redirect} from "react-router-dom"
import {getUserProfileThunkCreator, getStatusProfileThunkCreator, updateStatusProfileThunkCreator, savePhotoProfileThunkCreator, saveProfileThunkCreator} from "../redux/actions/ProfileAction";
import Profile from "../components/Profile/Profile";
import {usersApi} from "../Api/api";
import {WithAuthRedirect} from "../components/HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile () {
         let userId = this.props.match.params.userId;

         if(!userId) {
             userId = this.props.authorizedUserId
         }

         this.props.getUserProfile(userId);
         this.props.getStatusProfile(userId);
    }

    componentDidMount () {
        this.refreshProfile ()
    }

   componentDidUpdate (prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile ()
        }
   }

    render() {
         return (
             <Profile {...this.props}
                      isOwner={!this.props.match.params.userId}
                      profile={this.props.profile}
                      saveProfile={this.props.saveProfile}
                      status={this.props.status}
                      updateStatus={this.props.updateStatus}
                      savePhoto={this.props.savePhoto} />
         )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (userId) => {
            dispatch(getUserProfileThunkCreator(userId))
        },
        getStatusProfile: (userId) => {
            dispatch(getStatusProfileThunkCreator(userId))
        },
        updateStatus: (status) => {
            dispatch(updateStatusProfileThunkCreator(status))
        },
        savePhoto: (file) => {
            dispatch(savePhotoProfileThunkCreator(file))
        },
        saveProfile: (profile) => {
            dispatch(saveProfileThunkCreator(profile))
        }
    }
}

export default compose (
    connect (mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
) (ProfileContainer)


