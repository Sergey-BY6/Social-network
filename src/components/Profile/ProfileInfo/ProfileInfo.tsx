import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://photoclub.by/images/main37/378920_main.jpg" alt="image"/>
            </div>

            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;