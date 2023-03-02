const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
    resultCode: null,
    messages: [],
    // data: {
    //     id: null,
    //     email: null,
    //     login: null
    // },
    id: null,
        email: null,
        login: null,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                // data: {...state.data, email:action.email, id:action.id, login:action.login}
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = ({email, id, login}) => {
    return {
        type: SET_USERS_DATA,
        data: {
            email,
            id,
            login
        }
        
    }
}
export default authReducer;