import React from 'react';
import s from './Post.module.css'


type PostPropstype = {
    message: string,
    likesCount: number
    time: string
}


const Post: React.FC<PostPropstype> = (props) => {

    return (
        <>
            <div className={s.itemMain}></div>
            <div className={s.item}>
                <div className={s.itemImage}>
                    <img src="https://zamanilka.ru/wp-content/uploads/2023/06/ava-kotik-060623-1.jpg"
                         alt="image"/>
                </div>
                <div className={s.itemName}>Sergey Babich</div>
                <div className={s.itemPostTime}>{props.time}</div>
                <div className={s.itemMessage}>{props.message}</div>
                <div className={s.itemLike}><span>❤ </span> {props.likesCount}</div>
            </div>
        </>
    );
};

export default Post;