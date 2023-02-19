import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';


type MyPostsContainerPropsType = {
    // posts: postsType[]
    // addPost: () => void
    // newPostText: string
    // updateNewPostText: ((postText: string) => void)

    // dispatch: (action: mainType) => void
    // store: storeType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

// let state = props.store.getState()

//     const addPost = () => {
//         // props.addPost()
//         props.store.dispatch(addPostAC())
//
//     }
//
//     const onPostChange = (eText: string) => {
// // props.updateNewPostText(e.currentTarget.value)
//         props.store.dispatch(updateNewPostTextAC(eText))
//     }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                const addPost = () => {
                    // props.addPost()
                    store.dispatch(addPostAC())
                }

                const onPostChange = (eText: string) => {
// props.updateNewPostText(e.currentTarget.value)
                    store.dispatch(updateNewPostTextAC(eText))
                }

                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                    )

            }
        }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;