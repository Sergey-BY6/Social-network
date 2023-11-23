import React, {ChangeEvent} from 'react';
import s from './MuPosts.module.css'
import {MyPostsPropsType} from './MyPostsContainer';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


export const MyPosts = React.memo((props: MyPostsPropsType) => {

        // shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<MyPostsPropsType>): boolean {
        //     return nextProps !== this.props || nextState !== this.state
        // }

    // const time = ["two hours ago", "one hours ago"]

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

                    <AddPostFormRedux onSubmit={addNewPost}/>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }
)


type AddNewPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(200)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
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


export default MyPosts;