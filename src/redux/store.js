import messagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"

let store = {
    _state: {
        NavigationLinkData: [
            { nameLink: 'Profile', link: '/profile' },
            { nameLink: 'Messages', link: '/messages' },
            { nameLink: 'News', link: '/news' },
            { nameLink: 'Music', link: '/music' },
            { nameLink: 'Setings', link: '/setings' },
        ],
        profilePage: {
            postsData: [
                { textMessage: 'hellow world', likesCounter: '2' },
                { textMessage: 'Hi, my name is marat', likesCounter: '50' },
                { textMessage: 'how are you', likesCounter: '3' },
            ],
            inputPostText: '',
        },
        messagePage: {
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
        },
    },
    getState() {
        return this._state;
    },
    // addNewPost(myText) {
    //     let newPostsItem = { textMessage: myText, likesCounter: '0' }
    //     this._state.postsData.push(newPostsItem);
    //     this._callSubscriber(this._state);
    // },
    // changeInputPostText(text) {
    //     this._state.inputPostText = text;
    //     this._callSubscriber(this._state);
    // },

    // addMessageText(sendingText) {
    //     let newMessageItem = { textMessage: sendingText }
    //     this._state.messagePage.textMessageData.push(newMessageItem)
    //     this._callSubscriber(this._state);
    // },
    // changeInputMessageText(text) {
    //     this._state.messagePage.inputMessageText = text
    //     this._callSubscriber(this._state);
    // },
    _callSubscriber() {/*функция/метод заглушка*/ },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messagesReducer(this._state.messagePage, action)
        this._callSubscriber(this._state);

        // if (action.type === 'ADD-NEW-POST') {
        //     let newPostsItem = { textMessage: action.myText, likesCounter: '0' }
        //     this._state.profilePage.postsData.push(newPostsItem);
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === 'CHANGE-INPUT-POST-TEXT') {
        //     this._state.profilePage.inputPostText = action.text;
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === 'CHANGE-INPUT-MESSAGE-TEXT') {
        //     this._state.messagePage.inputMessageText = action.text
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === 'ADD-MESSAGE-TEXT') {
        //     let newMessageItem = { textMessage: action.sendingText }
        //     this._state.messagePage.textMessageData.push(newMessageItem)
        //     this._callSubscriber(this._state);
        // }
    }
}

export default store;
window.store = store;