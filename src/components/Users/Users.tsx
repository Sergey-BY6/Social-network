import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {InitialStateType} from '../../Redux/usersReducer';
import {NavLink} from 'react-router-dom';


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number []

}


const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(el => {
                    return (
                        <span
                            key={el}
                            className={props.currentPage === el ? s.selectPage : ''}
                            onClick={() => {
                                props.onPageChanged(el)
                            }}
                        >{el}</span>
                    )
                })}
            </div>
            {
                props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                               <img src={el.photos.small !== null ? el.photos.small : userPhoto} className={s.userPhoto}
                                    alt="paint"/>
                            </NavLink>

                        </div>
                        <div>
                                 {el.followed
                                     ? <button disabled={props.usersPage.followingInProgress.some(id => id === el.id)}
                                               onClick={() => props.unfollow(el.id)}>UnFollow</button>
                                     : <button disabled={props.usersPage.followingInProgress.some(id => id === el.id)}
                                               onClick={() => props.follow(el.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;