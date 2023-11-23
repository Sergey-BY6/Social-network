import s from './FormsControls.module.css'
import {Validator} from 'redux-form/lib/Field';
import {Field} from 'redux-form';



const FormControl: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <div className={s.formControlError}>{meta.error}</div>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}


export const Input: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}


export const createField = (placeholder: string | null, name: string, validators: Validator[], component: React.FC, props: any = {}, text: string = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={Input}
                   {...props}
            /> {text}
        </div>
    )
}