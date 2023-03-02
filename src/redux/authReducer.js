const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
    resultCode: null,
    messages: [],
    email: null,
    id: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {...state, 
                // ...action.data
                email: action.data.email,
                id: action.data.id,
                login: action.data.login,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setUserData = ({ email, id, login }) => {
    return {
        type: SET_USERS_DATA,
        data: {
            email,
            id,
            login
        }
        
            // email,
            // id,
            // login
        

    }
}
export default authReducer;