import { MyPosts } from './MyPosts/MyPosts'
import style from './Profile.module.css'
export let Profile = ()=> {
    return (
        <div className={style.profile}>
            <img src="#" alt="profile-avatar" />
            <div className={style.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi magnam similique dolore voluptatem quibusdam soluta incidunt quae? Rem consequuntur ad cupiditate. Nemo, dicta id. Modi, id eaque? Expedita, alias!</div>
            <MyPosts />
        </div>
    )
}