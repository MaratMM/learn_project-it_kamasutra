import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import React from 'react'

export let MyPosts = (props) => {

    let Posts = props.postsData.map((elem) => {
        return(
            <Post textMessage={elem.textMessage} likesCounter={elem.likesCounter} />
        )
    })
    let postText = React.createRef();
    let addPost = ()=> {
        props.addNewPost(postText.current.value);
    }
    return (
        <form className={style.my_posts}>
            <textarea ref={ postText} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={addPost} className={style.add_post}>add my post</button>
            <div className={style.added_post}>
                {Posts}
            </div>
        </form>
    )
}

