import React from 'react';
import s from './MuPosts.module.css'
import {MyPostsPropsType} from './MyPostsContainer';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea, TextareaInside} from '../../common/FormsControls/FormsControls';


export const MyPosts = React.memo((props: MyPostsPropsType) => {

        let postsElements = props.posts.map((el, index) => <Post key={el.id}
                                                        message={el.message}
                                                        likesCount={el.likesCount}
                                                        time={el.time}
        />)


        const addNewPost = (formData: AddNewPostFormType) => {
            console.log(formData.newPostText)
            props.addPost(formData.newPostText)
        }

        return (
            <div>
                <div className={s.newPostsBlock}>
                    <div className={s.myPosts}>Create post</div>

                    <AddPostFormInsideRedux onSubmit={addNewPost}/>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }
)


export default MyPosts;



type AddNewPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(200)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.areaError}>
                <Field component={Textarea}
                       placeholder={'Post Message'}
                       name={'newPostText'}
                       validate={[required, maxLength10]}
                       className={s.area}
                />
            </div>
            <div>
                <button className={s.createPostBtn}>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm<AddNewPostFormType>({form: 'ProdileAddNewPostForm'})(AddNewPostForm)



const AddNewPostFormInside: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.areaError}>
                <Field component={TextareaInside}
                       placeholder={'Post Message'}
                       name={'newPostText'}
                       validate={[required, maxLength10]}
                       className={s.area}

                />
            </div>
            <div>
                <button className={s.createPostBtn}>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormInsideRedux = reduxForm<AddNewPostFormType>({form: 'ProdileAddNewPostForm'})(AddNewPostFormInside)


