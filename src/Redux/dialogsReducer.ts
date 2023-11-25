const ADD_MESSAGE = 'ADD-MESSAGE'


export type dialogsType = {
    id: number
    name: string
    avatar: string
    status: string
}


export type MessageFullType = {
[key: string]: MessagesType[]
}
export type MessagesType = {
    id: number
    message: string
}


let initialState = {

    dialogs: [
        {id: 1, name: 'Dimych', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg', status: 'online'},
        {id: 2, name: 'Andrey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg', status: ''},
        {id: 3, name: 'Sveta', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg', status: ''},
        {id: 4, name: 'Sasha', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg', status: 'online'},
        {id: 5, name: 'Victor', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg', status: ''},
        {id: 6, name: 'Valera', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg', status: 'online'}
    ] as dialogsType[],
    messages: {
        "/dialogs/1": [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Noе bad'}
        ],
        "/dialogs/2": [],
        "/dialogs/3": [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
        ],
        "/dialogs/4": [],
        "/dialogs/5": [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Did you get the package?'},
        ],
        "/dialogs/6": [],
    } as MessageFullType
}




type MainType = addMessageACType
export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const id = Math.random() * 100
            const messagePost: MessagesType = {id: id, message: action.newMessageBody}
            return {
                    ...state, messages: {...state.messages, [action.block]: [...state.messages[action.block], messagePost]}
            }
        }
        default: {
            return state
        }
    }
}


export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (block: string, newMessageBody: string, ) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody,
        block
    } as const
}
