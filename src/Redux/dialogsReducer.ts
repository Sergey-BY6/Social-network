
const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


export type dialogsType = {
    id: number
    name: string
    avatar: string
}

export type messagesType = {
    id: number
    message: string
}


let initialState = {

    // newMessageText: '',
    dialogs: [
        {id: 1, name: 'Dimych', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'},
        {id: 2, name: 'Andrey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'},
        {id: 3, name: 'Sveta', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'},
        {id: 4, name: 'Sasha', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'},
        {id: 5, name: 'Victor', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'},
        {id: 6, name: 'Valera', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'}
    ] as dialogsType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as messagesType[]
}


type MainType = addMessageACType
    // | updateNewMessageTextACType
export type InitialStateType = typeof initialState



export const dialogsReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const messagePost: messagesType = {id: 5, message: action.newMessageBody}
            return {...state, messages: [...state.messages, messagePost],
                // newMessageText: ""
            }

        }
        // case UPDATE_NEW_MESSAGE_TEXT: {
        //     return {...state,
        //         // newMessageText: action.newMessageText
        //     }
        // }
        default: {
            return state
        }
    }
}


export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (newMessageBody: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    } as const
}

// export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
// export const updateNewMessageTextAC = (newMessageText: string) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_TEXT,
//         newMessageText: newMessageText
//     } as const
// }