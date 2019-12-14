import React from "react";
import Header from "../components/Header/Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataActionCreator} from "../actions/authAction";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserDataActionCreator(id, email, login)
                }
            }
        )
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps, {setAuthUserDataActionCreator}) (HeaderContainer);