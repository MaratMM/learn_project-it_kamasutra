import style from './MyPosts.module.css'
import { Post } from './Post/Post'

export let MyPosts = () => {
    return (
        <form className={style.my_posts}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className={style.add_post}>add my post</button>
            <div className={style.added_post}>
                <Post textMessage='hellow world' likesCounter='2' />
                <Post textMessage='hellow world' likesCounter='2' />
                <Post textMessage='hellow world' likesCounter='2' />
            </div>
        </form>
    )
}

