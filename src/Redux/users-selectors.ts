import { createSelector } from 'reselect';
import {AppStateType} from './redux-store';
import {InitialStateType} from './usersReducer';


const getUsersSelector = (state: AppStateType) => {
    return state.usersPage
}

export const getUsersS = createSelector (getUsersSelector, (users: InitialStateType):InitialStateType  => {
    // внимательно при ошибке
    return {...users, users: users.users.filter( el => true)}
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}