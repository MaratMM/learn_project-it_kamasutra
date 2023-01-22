import React from 'react'
import { connect } from 'react-redux';
import {addNewPostActionCreator, changeInputPostTextActionCreator} from '../../../redux/profileReducer' 
import {MyPosts} from './MyPosts'

// export let MyPostsContainer = (props) => {
//     let addPost = (text)=> {
//         // props.addNewPost(postText.current.value);
//         // props.dispatch({type: 'ADD-NEW-POST', myText: postText.current.value});
//         props.store.dispatch(addNewPostActionCreator(text));
//         // props.changeInputPostText('')
//         // props.dispatch({type: 'CHANGE-INPUT-POST-TEXT', text: ''})
//         // props.store.dispatch(changeInputPostTextActionCreator(''))
//     }
//     let onChangePost = (text)=> {
//         props.store.dispatch(changeInputPostTextActionCreator(text))
//     }
//     return (
//         <MyPosts onAddPost={addPost} onChangePost={onChangePost} postsData={props.store.getState().profilePage.postsData} />
//     )
// }

let mapStateToProps = (state)=> {
    return {
        postsData: state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        onAddPost: (text)=> {
            dispatch(addNewPostActionCreator(text));
        },
        onChangePost: (text)=> {
            dispatch(changeInputPostTextActionCreator(text))
        }
    }
}
export let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts)

