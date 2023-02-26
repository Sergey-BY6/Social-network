
export type postsType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    posts: postsType[]
    newPostText: string
}


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as postsType[],
    newPostText: ''
}



type MainType = updateNewPostTextACType | addPostACType
export type InitialStateType = typeof initialState



export const profileReducer = (state: InitialStateType = initialState, action: MainType):InitialStateType  => {
    switch (action.type) {
        case ADD_POST: {
            let messagePost: postsType = {id: 5, message: state.newPostText, likesCount: 0}
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(messagePost)
            stateCopy.newPostText = ""
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPostText
            return stateCopy

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