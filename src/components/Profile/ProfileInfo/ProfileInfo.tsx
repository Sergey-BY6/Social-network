import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../Redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
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


const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return (
            <div className={s.preloadProfile}><Preloader isFetching={props.isFetching} size={'small'} margin={props.margin}/></div>
        )
    }

    // const mainPhotoSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e.target.files) {
    //         props.savePhoto(e.target.files[0])
    //     }
    //
    // }

    return (
        <div className={s.profileInfoMain}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small || user} alt={'image'} className={s.mainFhoto}/>
                {props.isOwner
                    ? <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    : <div><span >{props.status ? props.status : '-----'}</span></div>
                }
                {/*{props.isOwner && <input*/}
                {/*    type={'file'}*/}
                {/*    onChange={mainPhotoSelectedHandler}*/}
                {/*    className={s.changeFoto}>*/}
                {/*</input>}*/}
                <div className={s.changeFoto}>{props.isOwner && <InputFile></InputFile>}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;