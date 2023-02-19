
import {avatarMan, avatarWoman, dialogsPageType, mainType, messagesType} from './store';


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initialState = {
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Dimych', avatar: avatarMan},
        {id: 2, name: 'Andrey', avatar: avatarMan},
        {id: 3, name: 'Sveta', avatar: avatarWoman},
        {id: 4, name: 'Sasha', avatar: avatarWoman},
        {id: 5, name: 'Victor', avatar: avatarMan},
        {id: 6, name: 'Valera', avatar: avatarMan}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
}


export const dialogsReducer = (state: dialogsPageType = initialState, action: mainType) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const messagePost: messagesType = {id: 5, message: state.newMessageText}
            state.messages.push(messagePost)
            state.newMessageText = ''
            return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText
            return state
        }
        default: {
            return state
        }
    }
}


export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}

export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}