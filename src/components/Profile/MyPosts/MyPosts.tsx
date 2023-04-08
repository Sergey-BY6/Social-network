import React, { ChangeEvent } from 'react';
import s from "./MuPosts.module.css"
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postsElements = props.posts.map(el =>  <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)


    const addNewPost = (formData: AddNewPostFormType) => {
        console.log(formData.newPostText)
        props.addPost(formData.newPostText)
    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <AddPostFormRedux onSubmit={addNewPost}/>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    );
};


type AddNewPostFormType = {
    newPostText: string
}

const maxLength10 =  maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea}
                           placeholder={"Post Message"}
                           name={"newPostText"}
                           validate={[required, maxLength10]}
                           className={s.area}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
    )
}
const AddPostFormRedux = reduxForm<AddNewPostFormType>({form: "ProdileAddNewPostForm"}) (AddNewPostForm)


export default MyPosts;