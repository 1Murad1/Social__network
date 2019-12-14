import React from "react";
import Users from "../components/Users/Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    setTotalUsersCountActionCreator, toggleIsFetchingActionCreator, toggleIsFollowingProgressActionCreator
} from "../actions/UsersAction";
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../Api/api";

class UsersContainer extends React.Component  {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            }
        )
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        usersApi.getUsers(this.props.pageSize)
        .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                console.log(response)
            }
        )
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
                       followingIsProgress={this.props.followingIsProgress}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress} />
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
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageActionCreator(numberPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        },
        toggleIsFollowingProgress: (isFetching, userId) => {
            dispatch(toggleIsFollowingProgressActionCreator(isFetching, userId))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);

