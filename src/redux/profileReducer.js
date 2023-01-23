const ADD_NEW_POST = 'ADD-NEW-POST'
const CHANGE_INPUT_POST_TEXT = 'CHANGE-INPUT-POST-TEXT'
let initialState = {
    postsData: [
        { textMessage: 'hellow world', likesCounter: '2' },
        { textMessage: 'Hi, my name is marat', likesCounter: '50' },
        { textMessage: 'how are you', likesCounter: '3' },
    ],
    inputPostText: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.inputPostText = action.text;
            return stateCopy
        }
        case ADD_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            let newPostsItem = { textMessage: action.myText, likesCounter: '0' }
            stateCopy.postsData.push(newPostsItem);
            return stateCopy
        }
        default:
            return state
    }

    // if (action.type === ADD_NEW_POST) {
    //     let newPostsItem = { textMessage: action.myText, likesCounter: '0' }
    //     state.postsData.push(newPostsItem);
    // }
    // else if (action.type === CHANGE_INPUT_POST_TEXT) {
    //     state.inputPostText = action.text;
    // }

    // return state
}
export const addNewPostActionCreator = (text) => {
    return {
        type: ADD_NEW_POST, myText: text
    }
}
export const changeInputPostTextActionCreator = (text) => {
    return {
        type: CHANGE_INPUT_POST_TEXT, text: text
    }
}
export default profileReducer