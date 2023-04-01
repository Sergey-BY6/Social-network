import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {AppStateType} from '../Redux/redux-store';
import {connect} from 'react-redux';


export type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }


    let ConectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConectedAuthRedirectComponent
}