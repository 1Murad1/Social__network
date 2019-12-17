import React from "react";
import Users from "../components/Users/Users";
import {connect} from "react-redux";
import {
    setCurrentPageActionCreator,
    getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
} from "../actions/UsersAction";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component  {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users currentPage={this.props.currentPage}
                       users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       followingIsProgress={this.props.followingIsProgress} />
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followThunkCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowThunkCreator(userId))
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageActionCreator(numberPage))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);

