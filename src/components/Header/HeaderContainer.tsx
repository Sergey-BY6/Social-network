import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {logout} from '../../Redux/auth-reducer';
import {AppStateType} from '../../Redux/redux-store';


class HeaderAuthContainer extends React.Component<HeaderPropsType> {


    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}


export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    logout: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export const HeaderContainer  = connect(mapStateToProps, {logout})(HeaderAuthContainer)
