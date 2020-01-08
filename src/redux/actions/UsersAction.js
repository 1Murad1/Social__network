import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    toggleIsFollowingProgress
} from "../type_action/type_action";
import {usersApi} from "../../Api/api";

export const followActionCreator = (userId) => ({type: follow, userId: userId});

export const unFollowActionCreator = (userId) => ({type: unFollow, userId: userId});

export const setUsersActionCreator = (users) => ({type: setUsers, users: users});

export const setCurrentPageActionCreator = (currentPage) => ({type: setCurrentPage, currentPage: currentPage});

export const setTotalUsersCountActionCreator = (totalCount) => ({type: setTotalUsersCount, totalCount: totalCount});

export const toggleIsFetchingActionCreator = (isFetching) => ({type: toggleIsFetching, isFetching: isFetching});

export const toggleIsFollowingProgressActionCreator = (isFetching, userId) => ({type: toggleIsFollowingProgress, isFetching: isFetching, userId: userId});

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        dispatch(setCurrentPageActionCreator(currentPage))
        let response = await usersApi.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetchingActionCreator(false))
            dispatch(setUsersActionCreator(response.items))
            dispatch(setTotalUsersCountActionCreator(response.totalCount))
    }

export const unFollowThunkCreator = (userId) => async (dispatch) => {
        dispatch(toggleIsFollowingProgressActionCreator(true, userId))
        let response = await usersApi.unFollow(userId)
            if(response.data.resultCode === 0) {
                dispatch(unFollowActionCreator(userId))
            }
            dispatch(toggleIsFollowingProgressActionCreator(false, userId))
    }

export const followThunkCreator = (userId) => async (dispatch) => {
        dispatch(toggleIsFollowingProgressActionCreator(true, userId))
        let response = await usersApi.follow(userId)
            if (response.data.resultCode === 0) {
                dispatch(followActionCreator(userId))
            }
            dispatch(toggleIsFollowingProgressActionCreator(false, userId))
    }