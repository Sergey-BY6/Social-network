import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {UsersType} from '../../Redux/usersReducer';
import {NavLink} from 'react-router-dom';


type UserPropsType = {
    user: UsersType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number []
}


export const User: React.FC<UserPropsType> = (props) => {

    let user = props.user

    return (
        <div className={s.user}>
            <span className={s.followUnfollowMain}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={s.userPhoto}
                             alt="paint"/>
                    </NavLink>
                        </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => props.unfollow(user.id)}
                            className={s.followBtn}
                        >Unfollow</button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => props.follow(user.id)}
                            className={s.onFollowBtn}
                        >Follow</button>
                    }
                </div>
            </span>
            <span className={s.nameStatusUserMain}>
                <span>
                    <div className={s.nameUser}>{user.name}</div>
                    <div className={s.statusUser}>{user.status}</div>
                </span >
                {/*<span>*/}
                {/*    <div>{'el.location.country'}</div>*/}
                {/*    <div>{'el.location.city'}</div>*/}
                {/*</span>*/}
            </span>
        </div>
    )
};

