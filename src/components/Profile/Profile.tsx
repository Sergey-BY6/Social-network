import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {mainActionType, postsType} from '../../Redux/state';



type ProfilePropsType = {
    posts: postsType[]
    newPostText: string
    // addPost: () => void
    // updateNewPostText: (postText: string) => void

    dispatch: (action: mainActionType) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
                     dispatch={props.dispatch}

            />

        </div>
    );
};

export default Profile;