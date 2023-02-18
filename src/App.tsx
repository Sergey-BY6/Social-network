// import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {RootStateType, storeType} from './Redux/state';
import Friends from './components/Friends/Friends';



type AppType = {
    store: storeType
}

const App: React.FC<AppType> = (props) => {

const state = props.store.getState()

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state}/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={()=> <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText}
                        dispatch={props.store.dispatch.bind(props.store)}

                        // updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                        // addMessage={props.store.addMessage.bind(props.store)}
                    />}
                    />
                    <Route path={'/profile'} render={()=> <Profile
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        dispatch={props.store.dispatch.bind(props.store)}

                        // addPost={props.store.addPost.bind(props.store)}
                        // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    />}
                    />



                    <Route path={'/news'}  render={()=> <News/>}/>
                    <Route path={'/music'} render={()=> <Music/>}/>
                    <Route path={'/settings'} render={()=> <Settings/>}/>

                    <Route path={'/friends'}  render={()=> <Friends/>}/>
                </div>
            </div>
    );
}


export default App;
