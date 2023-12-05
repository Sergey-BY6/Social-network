export type SidebarFriendsType = {
    name: string
}
export type SidebarType = {
    friends: SidebarFriendsType[]
}


let initialState = {
    friends: [{name: 'Ivan'}, {name: 'Maria'}, {name: 'Nastia'}] as SidebarFriendsType[]
}

export type InitialState = typeof initialState


export const sidebarReducer = (state: InitialState = initialState, action: any): InitialState => {
    return state
}