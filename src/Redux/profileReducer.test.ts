import {addPostAC, deletePost, postsType, profileReducer} from './profileReducer'


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12, time: "two"},
        {id: 2, message: 'It\'s my first post', likesCount: 11, time: "one"},
    ] as postsType[],
    // newPostText: '',
    profile: null,
    profile2: null,
    status: '',
    status2: '',
    isFetching: false
}


it('length ofposts should be incremented', () => {
    let action = addPostAC('BlaBla')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it('message of new post should be correct', () => {
    let action = addPostAC('BlaBla')
    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('BlaBla')
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})

it('after deleting length of messages should be decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})