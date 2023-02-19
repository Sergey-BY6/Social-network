
import {dialogsPageType, mainType, messagesType} from './state';


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state: dialogsPageType, action: mainType) => {

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