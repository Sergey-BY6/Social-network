import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import {useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';



type NavBartype = {
    // state: AppStateType
}




const Navbar: React.FC<NavBartype> = (props) => {

    const status = useSelector<AppStateType, string>(state => state.profilePage.status)


    return (
        <nav className={s.nav}>
            <div>
                <div className={s.itemImage}><img src="https://zamanilka.ru/wp-content/uploads/2023/06/ava-kotik-060623-1.jpg"
                                                  alt="image"/></div>
                {status}
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
                {/*<div className={s.friendsPersons}>*/}
                {/*    <div>*/}
                {/*        <div className={s.personsCircle}></div>*/}
                {/*        <div className={s.friendsPerson}>{props.state.sidebar.friends[0].name}</div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <div className={s.personsCircle}></div>*/}
                {/*        <div className={s.friendsPerson}>{props.state.sidebar.friends[1].name}</div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <div className={s.personsCircle}></div>*/}
                {/*        <div className={s.friendsPerson}>{props.state.sidebar.friends[2].name}</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </nav>
    );
};

export default Navbar;