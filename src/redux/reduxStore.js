import { combineReducers, legacy_createStore as createStore } from 'redux'
import authReducer from './authReducer'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = createStore(reducers)

window.store = store;

export default store