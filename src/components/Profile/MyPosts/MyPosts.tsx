import React, { ChangeEvent } from 'react';
import {mainType, postsType} from '../../../Redux/store';
import s from "./MuPosts.module.css"
import Post from './Post/Post';
import {addPostAC, updateNewPostTextAC} from '../../../Redux/profileReducer';





type MyPostsPropsType = {
    posts: postsType[]
    // addPost: () => void
    newPostText: string
    // updateNewPostText: ((postText: string) => void)

    dispatch: (action: mainType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postsElements = props.posts.map(el =>  <Post message={el.message} likesCount={el.likesCount}/>)



    const addPost = ()=> {
            // props.addPost()
        props.dispatch(addPostAC())

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
// props.updateNewPostText(e.currentTarget.value)
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))

    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <div>
                    <div>
                        <textarea onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    );
};

export default MyPosts;