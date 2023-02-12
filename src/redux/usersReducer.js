const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

let initialState = {
    // users: [
    //     { id: 1, followed: false, fullName: 'Alexander', statusProfile: 'im main mutherfucker', location: { city: 'kazan', country: 'russia' } },
    //     { id: 2, followed: true, fullName: 'Dimon', statusProfile: 'im main sucker', location: { city: 'moscow', country: 'russia' } },
    //     { id: 3, followed: false, fullName: 'Evgeny', statusProfile: 'im main dumb', location: { city: 'nizhnekamsk', country: 'russia' } },
    // ]
    users : [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users],
                //users: state.users.map(u=>u)
                //две записи выше идентичны по своей сути и функционалу
                users: state.users.map((elem) => {
                    if (elem.id === action.userId) {
                        return { ...elem, followed: true }
                    }
                    return elem
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((elem) => {
                    if (elem.id === action.userId) {
                        return { ...elem, followed: false }
                    }
                    return elem
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        }

        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage: currentPage
    }
}
export const setUsersTotalCountAC = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT, totalCount: totalCount
    }
}
export default usersReducer;