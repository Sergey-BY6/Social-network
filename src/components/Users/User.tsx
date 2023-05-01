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
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={s.userPhoto}
                             alt="paint"/>
                    </NavLink>
                        </div>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => props.unfollow(user.id)}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => props.follow(user.id)}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'el.location.country'}</div>
                    <div>{'el.location.city'}</div>
                </span>
            </span>
        </div>
    )
};

