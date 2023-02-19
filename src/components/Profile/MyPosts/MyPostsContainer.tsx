import React from 'react';
import {storeType} from '../../../Redux/store';
import {addPostAC, updateNewPostTextAC} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';





type MyPostsContainerPropsType = {
    // posts: postsType[]
    // addPost: () => void
    // newPostText: string
    // updateNewPostText: ((postText: string) => void)

    // dispatch: (action: mainType) => void
        store: storeType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

let state = props.store.getState()

    const addPost = ()=> {
            // props.addPost()
        props.store.dispatch(addPostAC())

    }

    const onPostChange = (eText: string) => {
// props.updateNewPostText(e.currentTarget.value)
        props.store.dispatch(updateNewPostTextAC(eText))

    }

    return (
       <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;