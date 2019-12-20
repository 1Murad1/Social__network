import React from "react";
import Header from "../components/Header/Header";
import {connect} from "react-redux";
import {meThunkCreator} from "../redux/actions/authAction";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.me()
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

let mapDispatchToState = (dispatch) => {
    return {
        me: () => {
            dispatch(meThunkCreator())
        }
    }
}

export default connect (mapStateToProps, mapDispatchToState) (HeaderContainer);