import style from './Post.module.css'
export let Post = (props) => {
    return (
        <div className={style.post_item}>
            <img src="#" alt="post-avatar" />
            <div className={style.post_text}> {props.textMessage} </div>
            <span className={style.like}>like {props.likesCounter} </span>
        </div>
    )
}