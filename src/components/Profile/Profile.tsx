import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



type ProfilePropsType = {
    // posts: postsType[]
    // newPostText: string
    // addPost: () => void
    // updateNewPostText: (postText: string) => void

    // dispatch: (action: mainType) => void
    // store: storeType
}

const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                // store={props.store}

                // posts={props.posts}
                //      newPostText={props.newPostText}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
                     // dispatch={props.dispatch}

            />

        </div>
    );
};

export default Profile;