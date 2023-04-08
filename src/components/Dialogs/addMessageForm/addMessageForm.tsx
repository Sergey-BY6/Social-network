import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';
import s from '../Dialogs.module.css';

export type AddMessageFormType = {
    newMessageBody: string
}

const maxLength50 =  maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessageBody"}
                   validate={[required, maxLength50]}
                   placeholder={'Enter your message'}
                   className={s.area}/>
            {/*<textarea*/}
            {/*    value={props.newMessageText}*/}
            {/*    onChange={onChangeMessageTextHandler}*/}
            {/*    className={s.area}></textarea>*/}
            {/*<button className={s.btnAdd} onClick={addMessageText}>Add</button>*/}
            <button className={s.btnAdd}>Add</button>

        </form>

    )
}
export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"}) (AddMessageForm)