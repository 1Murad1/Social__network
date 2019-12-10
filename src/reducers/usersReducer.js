export const follow = "FOLLOW";
export const unFollow = "UN-FOLLOW";
export const setUsers = "SET-USERS";
export const setCurrentPage = "SET-CURRENT-PAGE";
export const setTotalUsersCount = "SET-TOTAL-USERS-COUNT";
export const toggleIsFetching = "TOGGLE-IS-FETCHING";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        default:
            return state;
    }
}

export default usersReducer;