
export type postsType = {
    id: number
    message: string
    likesCount: number
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
    "photos": ProfileTypePhotos
}


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const TOGGLE_PROFILE_PAGE = "TOGGLE_PROFILE_PAGE"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as postsType[],
    newPostText: '',
    profile: null,
    isFetching: false
}






type MainType = updateNewPostTextACType | addPostACType | setUserProfileType | toggleProfilePageType
export type InitialStateType = typeof initialState



export const profileReducer = (state: InitialStateType = initialState, action: MainType):InitialStateType  => {
    switch (action.type) {
        case ADD_POST: {
            let messagePost: postsType = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, messagePost], newPostText: ""}
        }
        case UPDATE_NEW_POST_TEXT: {
          return {...state, newPostText: action.newPostText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile}
        }
        case TOGGLE_PROFILE_PAGE: {
            return {...state, isFetching: action.payload.isFetching}
        }
        default: {
            return state
        }
    }
}



export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}


export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST,
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