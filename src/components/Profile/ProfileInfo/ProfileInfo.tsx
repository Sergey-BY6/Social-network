import React from 'react';
import s from "./ProfileInfo.module.css"
import {ProfileType} from '../../../Redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWothHooks';


type ProfileInfoType = {
    profile: ProfileType | null
    isFetching: boolean
    status: string
    updateStatus: (status: string) => void
    margin?: string
}



const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
// debugger
    if(!props.profile) {
        return (
            <Preloader isFetching={props.isFetching} size={"small"} margin={props.margin}/>
        )
    }

    return (
        <div className={s.profileInfoMain}>
            {/*<div>*/}
            {/*    <img src="https://photoclub.by/images/main37/378920_main.jpg" alt="image"/>*/}
            {/*</div>*/}

            <div className={s.descriptionBlock}>
                {/*<img src={props.profile.photos.small} alt={"image"}/>*/}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;