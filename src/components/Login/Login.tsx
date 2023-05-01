import React from 'react';
import { InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import { required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../Redux/redux-store';
import s from './../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/*<div>*/}
            {/*    <Field placeholder={'Email'} name={'email'} component={Input}*/}
            {/*           validate={[required]}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field placeholder={'Password'} name={'password'} component={Input}*/}
            {/*           validate={[required]}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field component={Input} name={'rememberMe'} type={'checkbox'}*/}
            {/*    /> <span>remember me</span>*/}
            {/*</div>*/}
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
                <button>Log in</button>
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
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(mapStateToProps, {login})(Login)