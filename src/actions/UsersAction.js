import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    toggleIsFollowingProgress
} from "../reducers/usersReducer";

export const followActionCreator = (userId) => ({type: follow, userId: userId});

export const unFollowActionCreator = (userId) => ({type: unFollow, userId: userId});

export const setUsersActionCreator = (users) => ({type: setUsers, users: users});

export const setCurrentPageActionCreator = (currentPage) => ({type: setCurrentPage, currentPage: currentPage});

export const setTotalUsersCountActionCreator = (totalCount) => ({type: setTotalUsersCount, totalCount: totalCount});

export const toggleIsFetchingActionCreator = (isFetching) => ({type: toggleIsFetching, isFetching: isFetching});

export const toggleIsFollowingProgressActionCreator = (isFetching, userId) => ({type: toggleIsFollowingProgress, isFetching: isFetching, userId: userId});