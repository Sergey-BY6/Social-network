import React from 'react';
import { InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import { required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../Redux/redux-store';
import s from './../common/FormsControls/FormsControls.module.css'
import d from './Login.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input)}
            {createField(null,'rememberMe', [], Input, {type: "checkbox"}, "rememberMe")}

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
    // login: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

export type LoginPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        // login: state.auth.login
    }
}


const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={d.loginMain}>
            <div className={d.loginTitle}>Login</div>
            <div className={s.formControlBlock}><LoginReduxForm onSubmit={onSubmit}/></div>
        </div>
    );
};

export default connect(mapStateToProps, {login})(Login)