import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
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


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


type AppType = {
    // store: AppStateType   убрал передачу store через App
}

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
                {/*navbar с отрисвкой друзей*/}
                {/*<Navbar state={props.store}/>*/}
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'} render={WithSuspense(ProfileContainer)}/>

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


let AppConatiner = compose<React.ComponentType> (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)



const SamuraiJSApp = (props: any) => {
    return  <BrowserRouter>
        <Provider store={store}>
            <AppConatiner/>
            {/*<App  store={store}/>*/}
        </Provider>
    </BrowserRouter>
}


export default SamuraiJSApp
