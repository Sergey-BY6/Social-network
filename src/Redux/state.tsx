// let onChange = () => {
//
// }

// export const subscribe = (callBack: () => void) => {
//     onChange = callBack
// }


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

const avatarMan = 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'
const avatarWoman = 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}


// let state: RootStateType  = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you?", likesCount: 12},
//             {id: 2, message: "It's my first post", likesCount: 11},
//         ],
//         newPostText: ""
//     },
//     dialogsPage: {
//         newMessageText: "",
//         dialogs: [
//             {id: 1, name: 'Dimych', avatar: avatarMan},
//             {id: 2, name: 'Andrey', avatar: avatarMan},
//             {id: 3, name: 'Sveta', avatar: avatarWoman},
//             {id: 4, name: 'Sasha', avatar: avatarWoman},
//             {id: 5, name: 'Victor', avatar: avatarMan},
//             {id: 6, name: 'Valera', avatar: avatarMan}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'},
//         ]
//     },
//     sidebar: {
//         friends: [{name: "Ivan" }, {name: "Maria"}, {name: "Nastia"}],
//     }
// }

// export const addPost = () => {
//     const messagePost: postsType = {id: 5, message: state.profilePage.newPostText, likesCount: 0}
//     state.profilePage.posts.push(messagePost)
//     state.profilePage.newPostText = ''
//     onChange()
// }

// export const addMessage = () => {
//     const messagePost: messagesType = {id: 5, message: state.dialogsPage.newMessageText}
//     state.dialogsPage.messages.push(messagePost)
//     state.dialogsPage.newMessageText = ''
//     onChange()
// }

// export const updateNewPostText = (postText: string) => {
//     state.profilePage.newPostText = postText
//     onChange()
// }

// export const updateNewMessageText = (MessageText: string) => {
//     state.dialogsPage.newMessageText = MessageText
//     onChange()
// }


export type storeType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType

    // updateNewMessageText: (MessageText: string) => void
    // updateNewPostText: (postText: string) => void
    // addMessage: () => void
    // addPost: () => void

    dispatch: (action: mainActionType) => void
}


export type mainActionType = addPostActionType | addMessageActionType | updateNewPostTextActionType | updateNewMessageTextActionType


type addPostActionType = {
    type: "ADD-POST"
}
type addMessageActionType = {
    type: "ADD-MESSAGE"
}

type updateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}
type updateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessageText: string
}



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
    _onChange () {
        console.log("state changed")
    },
    subscribe(callBack) {
        this._onChange = callBack
    },
    getState() {
        return this._state
    },

    // addPost() {
    //     const messagePost: postsType = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
    //     this._state.profilePage.posts.push(messagePost)
    //     this._state.profilePage.newPostText = ''
    //     this._onChange()
    // },

    // addMessage() {
    //     const messagePost: messagesType = {id: 5, message: this._state.dialogsPage.newMessageText}
    //     this._state.dialogsPage.messages.push(messagePost)
    //     this._state.dialogsPage.newMessageText = ''
    //     this._onChange()
    // },

    // updateNewPostText(postText: string) {
    //     this._state.profilePage.newPostText = postText
    //     this._onChange()
    // },

    // updateNewMessageText(MessageText: string) {
    //     this._state.dialogsPage.newMessageText = MessageText
    //     this._onChange()
    // },


    dispatch (action) {
        if (action.type === 'ADD-POST') {
            const messagePost: postsType = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(messagePost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        }
        else if (action.type === 'ADD-MESSAGE') {
            const messagePost: messagesType = {id: 5, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(messagePost)
            this._state.dialogsPage.newMessageText = ''
            this._onChange()
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPostText
            this._onChange()
        }
        else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._onChange()        }
    }
}

export default store