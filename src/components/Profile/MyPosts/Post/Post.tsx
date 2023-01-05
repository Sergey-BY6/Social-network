import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://uprostim.com/wp-content/uploads/2021/03/image113-55.jpg" alt="image"/>
            post 1
            <div>like</div>
        </div>
    );
};

export default Post;