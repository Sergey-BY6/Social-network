import {Dispatch} from 'redux'
import {profileAPI, usersAPI} from '../api/api';

export type postsType = {
    id: number
    message: string
    likesCount: number
    time: string
}

export type profilePageType = {
    posts: postsType[]
    newPostText: string
    profile: ProfileType
    isFetching: boolean
}

type ProfileTypeContacts = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type ProfileTypePhotos = {
    small: string | undefined
    large: string | undefined
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileTypeContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    'photos': ProfileTypePhotos
}



const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_PROFILE_PAGE = 'TOGGLE_PROFILE_PAGE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


let initialState = {
    posts: [
        {id: 2, message: 'Hi, how are you?',  likesCount: 11, time: "one hours ago"},
        {id: 1, message: 'It\'s my first post', likesCount: 12, time: "two hours ago"},
    ] as postsType[],
    // newPostText: '',
    profile: null as any,
    // profile2: null as any,
    status: '',
    // status2: '',
    isFetching: false
}


type MainType = addPostACType | setUserProfileType | toggleProfilePageType | setStatusType | deletePostType | savePhotoSuccessType
export type InitialStateType = typeof initialState


export const profileReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let messagePost: postsType = {id: 5, message: action.newPostText, likesCount: 0, time: "now"}
            return {
                ...state, posts: [messagePost ,...state.posts ],
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile}
            // debugger
            // if(action.payload.profile.userId === 28096) {
            //     return {...state, profile: action.payload.profile}
            // }
            // else {
            //     return {...state, profile: action.payload.profile}
            // }
        }
        case TOGGLE_PROFILE_PAGE: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case SET_STATUS: {
            return {...state, status: action.payload.status}
            // return {
            //     ...state, status: action.payload.status
            // }
            // if (action.payload.userId === 28096 || action.payload.userId === "28096") {
            //     return {...state, status: action.payload.status}
            // } else {
            //     return {...state, status: action.payload.status}
            // }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(el => el.id !== action.payload.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.payload.photos}}
        }
        default: {
            return state
        }
    }
}

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export type toggleProfilePageType = ReturnType<typeof toggleProfilePage>
export const toggleProfilePage = (isFetching: boolean) => {
    return {
        type: TOGGLE_PROFILE_PAGE,
        payload: {
            isFetching
        }
    } as const
}

export type setStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string, userId?: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status: status,
            userId
        }
    } as const
}

// export type setStatus2Type = ReturnType<typeof setStatus2>
// export const setStatus2 = (status: string, userId?: string) => {
//     return {
//         type: SET_STATUS,
//         payload: {
//             status: status,
//             userId: 28096
//         }
//     } as const
// }

export type deletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        payload: {
            postId: postId
        }
    } as const
}



export type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>
export const savePhotoSuccess = (photos: { large: string, small: string }) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        payload: {
            photos
        }
    } as const
}


export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
    dispatch(toggleProfilePage(false))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data, userId))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

// export const updateStatus2 = (status: string) => async (dispatch: Dispatch) => {
//     const response = await profileAPI.updateStatus(status)
//     if (response.data.resultCode === 0) {
//         dispatch(setStatus(status))
//     }
// }


export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
