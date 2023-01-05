import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
            <header className={s.header}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13" alt="image"/>
            </header>
    );
};

export default Header;