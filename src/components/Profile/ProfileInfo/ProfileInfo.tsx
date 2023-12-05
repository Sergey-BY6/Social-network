import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../Redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWothHooks';
import user from './../../../assets/images/user.jpg'
import {InputFile} from './../../common/InputFile/InputFile';


type ProfileInfoType = {
    isOwner: boolean
    profile: ProfileType | null
    isFetching: boolean
    status: string
    updateStatus: (status: string) => void
    margin?: string
    savePhoto: (photoFile: File) => void
}


const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                    profile,
                                                    updateStatus,
                                                    isOwner,
                                                    isFetching,
                                                    margin,
                                                    status
                                                }: ProfileInfoType) => {
    if (!profile) {
        return (
            <div className={s.preloadProfile}><Preloader isFetching={isFetching} size={'small'} margin={margin}/></div>
        )
    }

    return (
        <div className={s.profileInfoMain}>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small || user} alt={'image'} className={s.mainFhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={s.changeFoto}>{isOwner && <InputFile></InputFile>}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;

