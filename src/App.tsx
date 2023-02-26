import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {AppStateType} from './Redux/redux-store';



type AppType = {
    // store: AppStateType   убрал передачу store через App
}

const App: React.FC<AppType> = (props) => {

// пока в App прокинул store через props, поскольку я самостоятельно добавлял в Navbar state и он там
// нужен (у Димы в видео такого нет). Чтобы не делать лишней работы пока оставил так, в след видео будет видно что с ним делать.
// const state = props.store   убрал на время отрисувку друзей в Navbar

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*navbar с отрисвкой друзей*/}
                {/*<Navbar state={props.store}/>*/}
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={()=> <DialogsContainer
                    />}
                    />
                    <Route path={'/profile'} render={()=> <Profile
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
