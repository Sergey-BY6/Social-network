import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css"
import {HeaderPropsType} from './HeaderContainer';




export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
            <header className={s.header}>
                <img src="https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13" alt="image"/>
               <div className={s.loginBlock}>
                   {props.isAuth
                       ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                       : <NavLink to={"/login"}>Login</NavLink>}

                </div>
            </header>
    );
};
