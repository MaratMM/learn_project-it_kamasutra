import { combineReducers, legacy_createStore as createStore } from 'redux'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'
let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer
})
let store = createStore(reducers)

export default store