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


const FormControlInside: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
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

export const TextareaInside: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControlInside {...props}><textarea {...input} {...restProps}/></FormControlInside>
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
        <div className={s.createFieldMain}>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={Input}
                   {...props}
                className={name === 'rememberMe' ? s.rememberMe : s.createField}
            /> {text}
        </div>
    )
}