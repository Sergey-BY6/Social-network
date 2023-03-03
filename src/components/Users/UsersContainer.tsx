import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {followAC, InitialStateType, setUsersAC, unFollowAC, UsersType} from '../../Redux/usersReducer';
import {Dispatch} from 'redux';





type mapStateToPropsType = {
    usersPage: InitialStateType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))

        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
