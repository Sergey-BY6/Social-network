import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType, useAppDispatch} from '../../Redux/redux-store';
import ProfileStatusWithHooks from '../Profile/ProfileInfo/ProfileStatusWothHooks';
import {
    getStatus,
    getUserProfile,
    ProfileType,
    setStatus,
    toggleProfilePage,
    updateStatus
} from '../../Redux/profileReducer';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';


type NavBartype = {
    // state: AppStateType
}


const Navbar: React.FC<NavBartype> = (props) => {

    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    const isFetching = useSelector<AppStateType, boolean>(state => state.profilePage.isFetching)
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)

    const myId = useSelector<AppStateType, number | null>(state => state.auth.id)
    const isInitialized = useSelector<AppStateType, boolean | null>(state => state.app.initialized)


    const dispatch = useAppDispatch()
    useEffect(() => {
        if (isInitialized && myId !== null) {
            dispatch(toggleProfilePage(true))
            dispatch(getUserProfile(myId.toString()))
            dispatch(getStatus(myId.toString()))
        }
    }, [isInitialized])


    return (
        <nav className={s.nav}>
            <div className={s.nameStatusImageBlock}>
                <div className={s.itemImage}>
                    <img src="https://zamanilka.ru/wp-content/uploads/2023/06/ava-kotik-060623-1.jpg"
                    alt="image"
                    />
                </div>
                <div className={s.nameStatusBlock}>
                    <div className={s.name}>Sergey Babich</div>
                    <ProfileInfo profile={profile}
                                 isFetching={isFetching}
                                 status={status}
                                 updateStatus={updateStatus}
                                 margin={'5px'}
                    />
                </div>
            </div>
            <div className={s.itemMainBlock}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <NavLink to={'/friends'} activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            </div>
        </nav>

    );
};

export default Navbar;