import { rerenderEntireTree } from "../render";

let state = {
    NavigationLinkData: [
        { nameLink: 'Profile', link: '/profile' },
        { nameLink: 'Messages', link: '/messages' },
        { nameLink: 'News', link: '/news' },
        { nameLink: 'Music', link: '/music' },
        { nameLink: 'Setings', link: '/setings' },
    ],
    postsData : [
        { textMessage: 'hellow world', likesCounter: '2' },
        { textMessage: 'Hi, my name is marat', likesCounter: '50' },
        { textMessage: 'how are you', likesCounter: '3' },
    ],
    contactData : [
        { nameLink: 'Katerina', link: '/messages/Katerina' },
        { nameLink: 'Mihail', link: '/messages/Mihail' },
        { nameLink: 'Kolya', link: '/messages/Kolya' },
        { nameLink: 'Natasha', link: '/messages/Natasha' },
    ],
    textMessageData : [
        { textMessage: 'hi its message in the dialogs' },
        { textMessage: 'blablabla' },
        { textMessage: 'testing my code in the react' },
        { textMessage: 'make next project' },
    ],
}

export let addNewPost = (myText)=> {
    let newPostsItem = { textMessage: myText, likesCounter: '0' }
    state.postsData.push(newPostsItem);
    rerenderEntireTree(state);
}
export let addMessageText = (sendingText) => {
    let newMessageItem = { textMessage: sendingText }
    state.textMessageData.push(newMessageItem)
    rerenderEntireTree(state)
}

export default state;