import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {HeaderPropsType} from './HeaderContainer';


export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.socialName}>Livebook</div>
            {/*<img src="https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13" alt="image"/>*/}
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
