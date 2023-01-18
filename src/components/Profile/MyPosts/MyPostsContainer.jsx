import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import React from 'react'
import {addNewPostActionCreator, changeInputPostTextActionCreator} from '../../../redux/profileReducer' 
import {MyPosts} from './MyPosts'

let postText = React.createRef();

export let MyPostsContainer = (props) => {
    let addPost = (text)=> {
        // props.addNewPost(postText.current.value);
        // props.dispatch({type: 'ADD-NEW-POST', myText: postText.current.value});
        props.store.dispatch(addNewPostActionCreator(text));
        // props.changeInputPostText('')
        // props.dispatch({type: 'CHANGE-INPUT-POST-TEXT', text: ''})
        // props.store.dispatch(changeInputPostTextActionCreator(''))
    }
    let onChangePost = (text)=> {
        props.store.dispatch(changeInputPostTextActionCreator(text))
    }
    return (
        <MyPosts onAddPost={addPost} onChangePost={onChangePost} postsData={props.store.getState().profilePage.postsData} />
    )
}

