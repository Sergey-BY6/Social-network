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
import {addMessage, RootStateType, updateNewMessageText, updateNewPostText} from './Redux/state';
import Friends from './components/Friends/Friends';
import {addPost} from './Redux/state';


type AppType = {
    state: RootStateType
}

const App: React.FC<AppType> = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state}/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={()=> <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        updateNewMessageText={updateNewMessageText}
                        addMessage={addMessage}
                    />}
                    />
                    <Route path={'/profile'} render={()=> <Profile
                        posts={props.state.profilePage.posts}
                        newPostText={props.state.profilePage.newPostText}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText}
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
