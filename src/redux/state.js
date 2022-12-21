let store = {
    _state: {
        NavigationLinkData: [
            { nameLink: 'Profile', link: '/profile' },
            { nameLink: 'Messages', link: '/messages' },
            { nameLink: 'News', link: '/news' },
            { nameLink: 'Music', link: '/music' },
            { nameLink: 'Setings', link: '/setings' },
        ],
        postsData: [
            { textMessage: 'hellow world', likesCounter: '2' },
            { textMessage: 'Hi, my name is marat', likesCounter: '50' },
            { textMessage: 'how are you', likesCounter: '3' },
        ],
        inputPostText: '',
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
    addMessageText(sendingText) {
        let newMessageItem = { textMessage: sendingText }
        this._state.textMessageData.push(newMessageItem)
        this._callSubscriber(this._state);
    },
    changeInputMessageText(text) {
        this._state.inputMessageText = text
        this._callSubscriber(this._state);
    },


    _callSubscriber() {/*функция/метод заглушка*/ },
    subscriber(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            let newPostsItem = { textMessage: action.myText, likesCounter: '0' }
            this._state.postsData.push(newPostsItem);
            this._callSubscriber(this._state);
        }
        if (action.type === 'CHANGE-INPUT-POST-TEXT') {
            this._state.inputPostText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;