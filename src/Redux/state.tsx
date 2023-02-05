import {rerenderEntireTree} from '../rerenderEntireTree';


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

const avatarMan = "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
const avatarWoman = "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}


let state: RootStateType  = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
        ],
        newPostText: ""
    },
    dialogsPage: {
        newMessageText: "",
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
        friends: [{name: "Ivan" }, {name: "Maria"}, {name: "Nastia"}],
    }
}



export const addPost = () => {
    const messagePost: postsType = {id: 5, message: state.profilePage.newPostText, likesCount: 0 }
    state.profilePage.posts.push(messagePost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const messagePost: messagesType = {id: 5, message: state.dialogsPage.newMessageText }
    state.dialogsPage.messages.push(messagePost)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree(state)
}



export const updateNewPostText = (postText: string) => {
    state.profilePage.newPostText = postText
    rerenderEntireTree(state)
}

export const updateNewMessageText = (MessageText: string) => {
    state.dialogsPage.newMessageText = MessageText
    rerenderEntireTree(state)
}






export default state