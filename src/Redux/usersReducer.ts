const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


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
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

            return {...state, users: action.payload.users}
        }
        case SET_CURRENT_PAGE: {

            return {...state, currentPage: action.payload.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {

            return {...state, totalUsersCount: action.payload.totalCount}
        }
        case TOGGLE_IS_FETCHING: {

            return {...state, isFetching: action.payload.isFetching}
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


export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const
}


export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalCount: totalCount
        }
    } as const
}


export type setToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching: isFetching
        }
    } as const
}