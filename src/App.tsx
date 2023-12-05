import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {AppStateType, store} from './Redux/redux-store';
import {UsersContainer} from './components/Users/UsersContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {WithSuspense} from './hoc/withSuspense';
import ProfileContainer from './components/Profile/ProfileContainer';



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component<AppPropsType> {

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
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/'} render={() => <Redirect to={"/profile"}/>} />
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

let AppConatiner = compose<React.ComponentType> (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)



const SamuraiTSApp = (props: any) => {
    return  <HashRouter>
        <Provider store={store}>
            <AppConatiner/>
        </Provider>
    </HashRouter>
}


export default SamuraiTSApp
