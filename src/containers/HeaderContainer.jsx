import React from "react";
import Header from "../components/Header/Header";
import {connect} from "react-redux";
import {logout} from "../redux/actions/authAction";


class HeaderContainer extends React.Component {

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

let mapDispatchToState = (dispatch) => {
    return {
        logout() {
            dispatch(logout())
        }
    }
}

export default connect (mapStateToProps, mapDispatchToState) (HeaderContainer);