import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {HeaderPropsType} from './HeaderContainer';


export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.socialName}>Livebook</div>
            <div>
                {props.isAuth
                    ? <div className={s.logoutBlock}>
                        <div className={s.userName}>{props.login}</div>
                        <button onClick={props.logout} className={s.button}>Logout</button>
                    </div>
                    : <NavLink to={'/login'} className={s.loginBlock}>Login</NavLink>}
            </div>
        </header>
    );
};
