import { MyPosts } from './MyPosts/MyPosts'
import style from './Profile.module.css'

export let Profile = (props)=> {
    return (
        <div className={style.profile}>
            <img src="#" alt="profile-avatar" />
            <div className={style.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi magnam similique dolore voluptatem quibusdam soluta incidunt quae? Rem consequuntur ad cupiditate. Nemo, dicta id. Modi, id eaque? Expedita, alias!</div>
            {/* <MyPosts postsData={props.postsData} addNewPost ={props.addNewPost} inputPostText={props.inputPostText} changeInputPostText={props.changeInputPostText} /> */}
            <MyPosts postsData={props.postsData} inputPostText={props.inputPostText} dispatch={props.dispatch} />
        </div>
    )
}