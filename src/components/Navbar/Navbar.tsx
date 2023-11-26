import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType, useAppDispatch} from '../../Redux/redux-store';
import ProfileStatusWithHooks from '../Profile/ProfileInfo/ProfileStatusWothHooks';
import {ProfileType, setStatus, updateStatus} from '../../Redux/profileReducer';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';


type NavBartype = {
    // state: AppStateType
}


const Navbar: React.FC<NavBartype> = (props) => {

    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    const isFetching = useSelector<AppStateType, boolean>(state => state.profilePage.isFetching)
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)



    return (
        <nav className={s.nav}>
            <div>
                <div className={s.itemImage}><img
                    src="https://zamanilka.ru/wp-content/uploads/2023/06/ava-kotik-060623-1.jpg"
                    alt="image"/></div>
                <ProfileInfo profile={profile}
                             isFetching={isFetching}
                             status={status}
                             updateStatus={updateStatus}
                />
            </div>
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
        </nav>
    );
};

export default Navbar;