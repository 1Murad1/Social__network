import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {setUserProfileActionCreator} from "../actions/ProfileAction";
import Profile from "../components/Profile/Profile";

class ProfileContainer extends React.Component {

    componentDidMount () {

        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileActionCreator(response.data)
            }
        )
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

export default connect (mapStateToProps, {setUserProfileActionCreator}) (withUrlDataContainerComponent);