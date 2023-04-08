import s from './FormsControls.module.css'
import {ReactNode} from 'react';


// type TextareaType = {
//     children?: ReactNode
// }


const FormControl: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
        // <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
        //     <div>
        //         <textarea {...input} {...props}/>
        //     </div>
        //     <div>
        //         {hasError && <span>{meta.error}</span> }
        //     </div>
        // </div>
    )
}


export const Input: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
        // <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
        //     <div>
        //         <input {...input} {...props}/>
        //     </div>
        //     <div>
        //         {hasError && <span>{meta.error}</span> }
        //     </div>
        // </div>
    )
}