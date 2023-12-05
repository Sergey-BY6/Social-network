import React, {useEffect} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profileReducer';
import s from './Profile.module.css'
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppStateType, useAppDispatch} from '../../Redux/redux-store';
import {follow, getUsers, unFollow, UsersType} from '../../Redux/usersReducer';
import {User} from '../Users/User';


type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType | null
    isFetching: boolean
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    const dispatch = useAppDispatch()
    let location = useLocation().pathname.split('/')[2]
    const user = useSelector<AppStateType, UsersType>(state => state.usersPage.users.filter(el => el.id === +location)[0])
    const followingInProgress = useSelector<AppStateType, number []>(state => state.usersPage.followingInProgress)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)

    const followCb = (userId: number) => {
        dispatch(follow(userId))
    }

    const onFollowCb = (userId: number) => {
        dispatch(unFollow(userId))
    }

    useEffect(()=> {
        dispatch(getUsers(currentPage, pageSize))
    },[])


    return (
        <div className={s.profileMain}>
            {props.isOwner ?
                <MyPostsContainer/> :
                user && <User user={user} follow={followCb} unfollow={onFollowCb} followingInProgress={followingInProgress}/>
            }
        </div>
    );
};

export default Profile;