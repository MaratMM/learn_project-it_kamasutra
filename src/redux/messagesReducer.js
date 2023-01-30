const CHANGE_INPUT_MESSAGE_TEXT = 'CHANGE-INPUT-MESSAGE-TEXT'
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'
let initialState = {
    contactData: [
        { nameLink: 'Katerina', link: '/messages/Katerina' },
        { nameLink: 'Mihail', link: '/messages/Mihail' },
        { nameLink: 'Kolya', link: '/messages/Kolya' },
        { nameLink: 'Natasha', link: '/messages/Natasha' },
    ],
    inputMessageText: '',
    textMessageData: [
        { textMessage: 'hi its message in the dialogs' },
        { textMessage: 'blablabla' },
        { textMessage: 'testing my code in the react' },
        { textMessage: 'make next project' },
    ],
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.inputMessageText = action.text
            return stateCopy
        }
            
        case ADD_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.textMessageData = [...state.textMessageData]
            let newMessageItem = { textMessage: action.sendingText }
            stateCopy.textMessageData.push(newMessageItem)
            return stateCopy
        }
            
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
export default messagesReducer;