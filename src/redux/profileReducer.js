const ADD_NEW_POST = 'ADD-NEW-POST'
const CHANGE_INPUT_POST_TEXT = 'CHANGE-INPUT-POST-TEXT'

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPostsItem = { textMessage: action.myText, likesCounter: '0' }
            state.postsData.push(newPostsItem);
            return state
        case CHANGE_INPUT_POST_TEXT:
            state.inputPostText = action.text;
            return state
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

export default profileReducer
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