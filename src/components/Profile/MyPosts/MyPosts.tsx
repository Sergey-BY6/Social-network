import React, { ChangeEvent } from 'react';
import s from "./MuPosts.module.css"
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postsElements = props.posts.map(el =>  <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const onAddPost = ()=> {
            props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
props.updateNewPostText(e.currentTarget.value)
    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <div>
                    <div>
                        <textarea onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    );
};

export default MyPosts;