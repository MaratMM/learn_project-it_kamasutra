import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import React from 'react'
import {addNewPostActionCreator, changeInputPostTextActionCreator} from '../../../redux/profileReducer' 

let postText = React.createRef();

export let MyPosts = (props) => {
    
    let addPost = (evt)=> {
        evt.preventDefault();
        // // props.addNewPost(postText.current.value);
        // // props.dispatch({type: 'ADD-NEW-POST', myText: postText.current.value});
        // props.dispatch(addNewPostActionCreator(postText.current.value));
        // // props.changeInputPostText('')
        // // props.dispatch({type: 'CHANGE-INPUT-POST-TEXT', text: ''})
        // props.dispatch(changeInputPostTextActionCreator(''))

        props.onAddPost(postText.current.value)
        postText.current.value = ''
    }
    let onChangePost = ()=> {
        // props.dispatch(changeInputPostTextActionCreator(postText.current.value))
        props.onChangePost(postText.current.value)
    }
    let Posts = props.postsData.map((elem) => {
        return(
            <Post textMessage={elem.textMessage} likesCounter={elem.likesCounter} />
        )
    })
    return (
        <form className={style.my_posts}>
            <textarea ref={postText} onChange={onChangePost} value={props.inputPostText} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={addPost} className={style.add_post}>add my post</button>
            <div className={style.added_post}>
                {Posts}
            </div>
        </form>
    )
}

