import React from "react";
import Users from "../components/Users/Users";
import {connect} from "react-redux";
import {
    setCurrentPageActionCreator,
    getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
} from "../redux/actions/UsersAction";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../components/HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingIsProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../redux/selectors/userSelectors";

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
                       totalItemsCount={this.props.totalItemsCount}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       followingIsProgress={this.props.followingIsProgress} />
            </>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingIsProgress: state.usersPage.followingIsProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state)
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

export default compose (
    connect (mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
) (UsersContainer)

