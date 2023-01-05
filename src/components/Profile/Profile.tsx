import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img src="https://photoclub.by/images/main37/378920_main.jpg" alt="image"/>
            </div>

            <div>
                ava+description
            </div>

            <MyPosts/>

        </div>
    );
};

export default Profile;