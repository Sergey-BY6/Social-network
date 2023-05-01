import {UsersType} from './../Redux/usersReducer';

export const updateObjectInArray = (items: UsersType[], itemId: number, value: boolean) => {
    return items.map(el => el.id === itemId ? {...el, followed: value} : el)
}