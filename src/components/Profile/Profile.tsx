import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { postsType } from '../../Redux/state';



type ProfilePropsType = {
    posts: postsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (postText: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;