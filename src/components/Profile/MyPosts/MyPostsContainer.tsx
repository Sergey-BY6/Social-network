import React from 'react';
import {addPostAC, InitialStateType, postsType} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';
import { Dispatch } from 'redux';



type mapStateToPropsType = {
    posts: postsType[]
    // newPostText: string
}

type mapDispatchToPropsType = {
    // updateNewPostText: (eText: string) => void
    addPost: (newPostText: string) => void
}


export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        // updateNewPostText: (eText: string) => {
        //     dispatch(updateNewPostTextAC(eText))
        // } ,
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;