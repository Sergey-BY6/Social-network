import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import {RootStateType} from '../../Redux/store';


type NavBartype = {
    state: RootStateType
}




const Navbar: React.FC<NavBartype> = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
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
                <div className={s.friendsPersons}>
                    <div>
                        <div className={s.personsCircle}></div>
                        <div className={s.friendsPerson}>{props.state.sidebar.friends[0].name}</div>
                    </div>
                    <div>
                        <div className={s.personsCircle}></div>
                        <div className={s.friendsPerson}>{props.state.sidebar.friends[1].name}</div>
                    </div>
                    <div>
                        <div className={s.personsCircle}></div>
                        <div className={s.friendsPerson}>{props.state.sidebar.friends[2].name}</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;