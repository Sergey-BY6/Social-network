import React from 'react';
import s from "./ProfileInfo.module.css"
import {ProfileType} from '../../../Redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';


type ProfileInfoType = {
    profile: ProfileType | null
    isFetching: boolean
}



const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    if(!props.profile) {
        return (
            <Preloader isFetching={props.isFetching}/>
        )
    }

    return (
        <div>
            <div>
                <img src="https://photoclub.by/images/main37/378920_main.jpg" alt="image"/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt={"image"}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.instagram}</div>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;