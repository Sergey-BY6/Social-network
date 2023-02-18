import React, { ChangeEvent } from 'react';
import {mainActionType, postsType} from '../../../Redux/state';
import s from "./MuPosts.module.css"
import Post from './Post/Post';





type MyPostsPropsType = {
    posts: postsType[]
    // addPost: () => void
    newPostText: string
    // updateNewPostText: ((postText: string) => void)

    dispatch: (action: mainActionType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postsElements = props.posts.map(el =>  <Post message={el.message} likesCount={el.likesCount}/>)



    const addPost = ()=> {
            // props.addPost()
        props.dispatch({type: "ADD-POST"})

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
// props.updateNewPostText(e.currentTarget.value)
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: e.currentTarget.value})

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