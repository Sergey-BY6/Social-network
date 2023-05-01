import React from 'react';
import {InitialStateType} from '../../Redux/usersReducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';


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

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
            <div>
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