const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    // users: [
    //     { id: 1, followed: false, fullName: 'Alexander', statusProfile: 'im main mutherfucker', location: { city: 'kazan', country: 'russia' } },
    //     { id: 2, followed: true, fullName: 'Dimon', statusProfile: 'im main sucker', location: { city: 'moscow', country: 'russia' } },
    //     { id: 3, followed: false, fullName: 'Evgeny', statusProfile: 'im main dumb', location: { city: 'nizhnekamsk', country: 'russia' } },
    // ]
    users : []
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
            return { ...state, users: [...state.users, ...action.users] }
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
export default usersReducer;