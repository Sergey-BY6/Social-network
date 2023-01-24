import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { postsType } from '../../Redux/state';



type ProfilePropsType = {
    posts: postsType[]
    addPost: (postText: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;