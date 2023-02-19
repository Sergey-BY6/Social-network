import {addPostACType, profileReducer, updateNewPostTextACType} from './profileReducer';
import {addMessageACType, dialogsReducer, updateNewMessageTextACType} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';

export type dialogsType = {
    id: number
    name: string
    avatar: string
}

export type messagesType = {
    id: number
    message: string
}

export type postsType = {
    id: number
    message: string
    likesCount: number
}


export type profilePageType = {
    posts: postsType[]
    newPostText: string
}

export type dialogsPageType = {
    newMessageText: string
    dialogs: dialogsType[],
    messages: messagesType[]
}


export type SidebarFriendsType = {
    name: string
}
export type sidebarType = {
    friends: SidebarFriendsType[]
}

export const avatarMan = 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'
export const avatarWoman = 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}


export type storeType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType

    dispatch: (action: mainType) => void
}


export type mainType = addPostACType | addMessageACType | updateNewPostTextACType | updateNewMessageTextACType



const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [{name: 'Ivan'}, {name: 'Maria'}, {name: 'Nastia'}],
        }
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callBack) {
        this._onChange = callBack
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChange()
    }
}

export default store