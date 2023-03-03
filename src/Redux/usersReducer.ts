const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

// type UserLocationType = {
//     city: string
//     country: string
// }

// export type UsersType = {
//     id: number,
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: UserLocationType
// }

// export type UsersType = {
//     id: number,
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: UserLocationType
//
// }
// type RootUserStateType = {
//     users: UsersType[]
// }
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
    users: [] as UsersType[]
}

export type InitialStateType = typeof initialState


export const usersReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {

            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        }
        case UNFOLLOW: {

            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        }
        case SET_USERS: {

            return {...state, users: [...state.users, ...action.payload.users]}
        }

        default: {
            return state
        }
    }
}


export type MainType = followACType | unFollowACType | setUsersACType


type followACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId: userId
        }
    } as const
}


type unFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId: userId
        }
    } as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}