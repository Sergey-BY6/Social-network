import React from 'react';
import s from './Post.module.css'


type PostPropstype = {
    message: string,
    likesCount: number
}


const Post: React.FC<PostPropstype> = (props) => {

    return (
        <div className={s.item}>
            <img src="https://uprostim.com/wp-content/uploads/2021/03/image113-55.jpg" alt="image"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}</div>
        </div>
    );
};

export default Post;