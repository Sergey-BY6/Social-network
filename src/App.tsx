// import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {storeType} from './Redux/store';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';



type AppType = {
    store: storeType ////пофиксить тип
}

const App: React.FC<AppType> = (props) => {
// пока в App прокинул store через props, поскольку я самостоятельно добавлял в Navbar state и он там
// нужен (у Димы в видео такого нет). Чтобы не делать лишней работы пока оставил так, в след видео будет видно что с ним делать.
const state = props.store.getState()
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state}/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={()=> <DialogsContainer
                        // store={props.store}
                        // dialogs={state.dialogsPage.dialogs}
                        // messages={state.dialogsPage.messages}
                        // newMessageText={state.dialogsPage.newMessageText}
                        // dispatch={props.store.dispatch.bind(props.store)}

                        // updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                        // addMessage={props.store.addMessage.bind(props.store)}
                    />}
                    />
                    <Route path={'/profile'} render={()=> <Profile
                        // store={props.store}
                        // posts={state.profilePage.posts}
                        // newPostText={state.profilePage.newPostText}
                        // dispatch={props.store.dispatch.bind(props.store)}

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
