import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    toggleIsFollowingProgress
} from "../reducers/usersReducer";
import {usersApi} from "../Api/api";

export const followActionCreator = (userId) => ({type: follow, userId: userId});

export const unFollowActionCreator = (userId) => ({type: unFollow, userId: userId});

export const setUsersActionCreator = (users) => ({type: setUsers, users: users});

export const setCurrentPageActionCreator = (currentPage) => ({type: setCurrentPage, currentPage: currentPage});

export const setTotalUsersCountActionCreator = (totalCount) => ({type: setTotalUsersCount, totalCount: totalCount});

export const toggleIsFetchingActionCreator = (isFetching) => ({type: toggleIsFetching, isFetching: isFetching});

export const toggleIsFollowingProgressActionCreator = (isFetching, userId) => ({type: toggleIsFollowingProgress, isFetching: isFetching, userId: userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        usersApi.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(toggleIsFetchingActionCreator(false))
            dispatch(setUsersActionCreator(response.items))
            dispatch(setTotalUsersCountActionCreator(response.totalCount))
        })
    }
}

export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressActionCreator(true, userId))
        usersApi.unFollow(userId)
        .then(response => {
                if(response.data.resultCode == 0) {
                    dispatch(unFollowActionCreator(userId))
                }
                dispatch(toggleIsFollowingProgressActionCreator(false, userId))
            }
        )
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressActionCreator(true, userId))
        usersApi.follow(userId)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followActionCreator(userId))
            }
            dispatch(toggleIsFollowingProgressActionCreator(false, userId))
        })
    }

}