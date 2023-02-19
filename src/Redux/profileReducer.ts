
import {mainType, postsType, profilePageType} from './store';

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ],
    newPostText: ''
}


export const profileReducer = (state: profilePageType = initialState, action: mainType) => {
    switch (action.type) {
        case ADD_POST: {
            const messagePost: postsType = {id: 5, message: state.newPostText, likesCount: 0}
            state.posts.push(messagePost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
                state.newPostText = action.newPostText
            return state
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