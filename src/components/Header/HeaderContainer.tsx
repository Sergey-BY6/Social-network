import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {autorization, setAuthUserData} from '../../Redux/auth-reducer';
import {AppStateType} from '../../Redux/redux-store';


class HeaderAuthContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.autorization()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, login, email} = response.data.data
        //             this.props.setAuthUserData(id, login, email)
        //         }
        //     })

    }

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
    login: string
}

type mapDispatchToPropsType = {
    // setAuthUserData: ( id: number, login: string, email: string) => void
    autorization: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer  = connect(mapStateToProps, {autorization})(HeaderAuthContainer)
