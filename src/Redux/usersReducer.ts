
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type UserLocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number,
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}
// type RootUserStateType = {
//     users: UsersType[]
// }


let initialState = {
    users: [
    //     {id: 1, photoUrl: "https://avatars.mds.yandex.net/i?id=a4064402cbc6638c11a181ce2e88f9bf2d5386e8-5383276-images-thumbs&ref=rim&n=33&w=112&h=165", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
    //     {id: 2, photoUrl: "https://avatars.mds.yandex.net/i?id=a4064402cbc6638c11a181ce2e88f9bf2d5386e8-5383276-images-thumbs&ref=rim&n=33&w=112&h=165", followed: true, fullName: "Sasha", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
    //     {id: 3, photoUrl: "https://avatars.mds.yandex.net/i?id=a4064402cbc6638c11a181ce2e88f9bf2d5386e8-5383276-images-thumbs&ref=rim&n=33&w=112&h=165", followed: false, fullName: "Andrew", status: "I am a boss too", location: {city: "Kiev", country: "Ukraine"}}
    // ] as UsersType[]
    ] as UsersType[]
}

export type InitialStateType = typeof initialState


export const usersReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {

            return {...state, users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {

            return {...state, users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)}
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