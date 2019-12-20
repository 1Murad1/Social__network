import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFollowingProgress, toggleIsFetching} from "../type_action/type_action";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case unFollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })
            }
        case setUsers:
            return {
                ...state,
                users: action.users
            }
        case setCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case setTotalUsersCount:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case toggleIsFetching:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case toggleIsFollowingProgress:
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export default usersReducer;