import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profileReducer';
import {Redirect} from 'react-router-dom';



type ProfilePropsType = {
    profile: ProfileType | null
    isFetching: boolean
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} isFetching={props.isFetching}/>
            <MyPostsContainer
            />

        </div>
    );
};

export default Profile;