import './App.css';

import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {AppStateType} from './Redux/redux-store';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import {HeaderContainer, HeaderPropsType} from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from './Redux/auth-reducer';
import {compose} from 'redux';
import {initializeApp} from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
// import {Login} from './components/Login/Login';


type AppType = {
    // store: AppStateType   убрал передачу store через App
}

class App extends React.Component<AppPropsType> {
// пока в App прокинул store через props, поскольку я самостоятельно добавлял в Navbar state и он там
// нужен (у Димы в видео такого нет). Чтобы не делать лишней работы пока оставил так, в след видео будет видно что с ним делать.
// const state = props.store   убрал на время отрисувку друзей в Navbar

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader isFetching={true}/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                {/*navbar с отрисвкой друзей*/}
                {/*<Navbar state={props.store}/>*/}
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>


                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>

                    <Route path={'/friends'} render={() => <Friends/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>

                    <Route path={'/login'} render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}


export type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    initialized: boolean
}

type mapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}




export default compose<React.ComponentType> (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
