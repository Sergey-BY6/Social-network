import React from 'react';
import {InitialStateType} from '../../Redux/usersReducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';
import s from './Users.module.css'


type UsersPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number []

}


const Users: React.FC<UsersPropsType> = (props) => {

    return (
        <div className={s.usersMain}>
            <Paginator totalItemsCount={props.totalItemsCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
            <div className={s.usersPage}>
                {
                    props.usersPage.users.map(el => <User key={el.id}
                                                          user={el}
                                                          follow={props.follow}
                                                          unfollow={props.unfollow}
                                                          followingInProgress={props.followingInProgress}
                    />)
                }
            </div>

        </div>
    );
};

export default Users;