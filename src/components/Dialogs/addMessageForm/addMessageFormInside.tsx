import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea, TextareaInside} from '../../common/FormsControls/FormsControls';
import s from '../Dialogs.module.css';

export type AddMessageFormType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageFormInside: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textareaBlock}>
                <Field component={TextareaInside} name={'newMessageBody'}
                       validate={[required, maxLength50]}
                       placeholder={'Enter your message'}
                       className={s.area}/>
            </div>
            {/*<div>*/}
                <button className={s.btnAdd}>send</button>
            {/*</div>*/}
        </form>
    )
}
export const AddMessageFormInsideRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageFormInside)