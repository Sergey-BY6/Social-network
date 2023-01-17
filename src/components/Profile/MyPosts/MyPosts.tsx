import React from 'react';
import s from "./MuPosts.module.css"
import Post from './Post/Post';




const MyPosts = () => {


    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ]

    let postsElements = posts.map(el =>  <Post message={el.message} likesCount={el.likesCount}/>)

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    );
};

export default MyPosts;