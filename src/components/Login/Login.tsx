import React from 'react';
import { InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import { required} from '../../utils/validators/validators';
import {connect, useSelector} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../Redux/redux-store';
import s from './../common/FormsControls/FormsControls.module.css'
import d from './Login.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const captchaUrl = useSelector<AppStateType, string | null>(state => state.auth.captchaUrl)
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input)}
            {createField(null,'rememberMe', [], Input, {type: "checkbox"}, "rememberMe")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image",'captcha', [required], Input, {})}


            <div>
                {props.error &&
                    <div className={s.formSummeryError}>
                        {props.error}
                    </div>
                }
            </div>
            <div>
                <button className={s.btn}>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
    // login: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
        // login: state.auth.login
    }
}


const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={d.loginMain}>
            <div className={d.loginTitle}>Login</div>
            <div className={s.formControlBlock}><LoginReduxForm onSubmit={onSubmit} /></div>
        </div>
    );
};

export default connect(mapStateToProps, {login})(Login)