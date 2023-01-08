const CHANGE_INPUT_MESSAGE_TEXT = 'CHANGE-INPUT-MESSAGE-TEXT'
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'

const messagesReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_INPUT_MESSAGE_TEXT:
            state.inputMessageText = action.text
            return state
        case ADD_MESSAGE_TEXT:
            let newMessageItem = { textMessage: action.sendingText }
            state.textMessageData.push(newMessageItem)
            return state
        default:
            return state
    }

    // if (action.type === CHANGE_INPUT_MESSAGE_TEXT) {
    //     state.inputMessageText = action.text
    // }
    // else if (action.type === ADD_MESSAGE_TEXT) {
    //     let newMessageItem = { textMessage: action.sendingText }
    //     state.textMessageData.push(newMessageItem)
    // }

    // return state
}
export default messagesReducer;
export const addMessageTextActionCreator = (sendingText) => { 
    return {
        type: ADD_MESSAGE_TEXT, sendingText: sendingText
    }
}
export const changeInputMessageTextActionCreator = (text) => {
    return {
        type: CHANGE_INPUT_MESSAGE_TEXT, text: text
    }
 }