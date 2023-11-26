import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {updateObjectInArray} from './../utils/object-helpers';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



type itemsPhotosType = {
    small: string | null
    large: string | null
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: itemsPhotosType
    status: string | null
    followed: boolean
}

let initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    isFetchingForButton: false,
    followingInProgress: [] as number []
}

export type InitialStateType = typeof initialState


export const usersReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: updateObjectInArray(state.users, action.payload.userId, true)
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: updateObjectInArray(state.users, action.payload.userId, false)
            }
        }
        case SET_USERS: {
            return {...state, users: action.payload.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalItemsCount: action.payload.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.payload.isFetchingForButton
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(el => el !== action.payload.userId)
            }
        }
        default: {
            return state
        }
    }
}


export type MainType = followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setToggleIsFetchingACType
    | toggleFollowingInProgressACType


export type followACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId: userId
        }
    } as const
}

export type unFollowACType = ReturnType<typeof unFollowSuccess>
export const unFollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId: userId
        }
    } as const
}

export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const
}

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalCount: totalCount
        }
    } as const
}

export type setToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching: isFetching
        }
    } as const
}

export type toggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFetchingForButton: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetchingForButton: isFetchingForButton,
            userId: userId
        }
    } as const
}


export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}


type apiMethodType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number
}

const followUnfollowFlow = async (dispatch: Dispatch,
                                  elId: number, apiMethod: (elId: number) => Promise<apiMethodType>,
                                  actionCreator: ((userId: number) => followACType | unFollowACType)) => {
    dispatch(toggleFollowingInProgress(true, elId))
    const data = await apiMethod(elId)
    if (data.resultCode === 0) {
        dispatch(actionCreator((elId)))
    }
    dispatch(toggleFollowingInProgress(false, elId))
}

export const follow = (elId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    followUnfollowFlow(dispatch, elId, apiMethod, followSuccess)
}

export const unFollow = (elId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.unFollow.bind(usersAPI)
    followUnfollowFlow(dispatch, elId, apiMethod, unFollowSuccess)
}