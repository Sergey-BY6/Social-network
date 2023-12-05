import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import { TextareaInside} from '../../common/FormsControls/FormsControls';
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
                <button className={s.btnAdd}>send</button>
        </form>
    )
}
export const AddMessageFormInsideRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageFormInside)