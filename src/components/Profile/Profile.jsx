import style from './Profile.module.css'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { Preloader } from '../common/Preloader/Preloader'

export let Profile = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={style.profile}>
            <img src={props.profile.photos.large} alt="profile-avatar" />
            <div className={style.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi magnam similique dolore voluptatem quibusdam soluta incidunt quae? Rem consequuntur ad cupiditate. Nemo, dicta id. Modi, id eaque? Expedita, alias!</div>
            {/* <MyPosts postsData={props.postsData} addNewPost ={props.addNewPost} inputPostText={props.inputPostText} changeInputPostText={props.changeInputPostText} /> */}
            {/* <MyPostsContainer postsData={props.postsData} inputPostText={props.inputPostText} dispatch={props.dispatch} /> */}

            <MyPostsContainer store={props.store} />

        </div>
    )
}