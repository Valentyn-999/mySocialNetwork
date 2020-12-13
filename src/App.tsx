import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, RootStateType, StoreType} from './redux/store'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Store} from "redux";

type PropsType = {
    store: Store
    // state: RootStateType
    // dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path="/dialogs"
                       render={() => <DialogsContainer
                           store={props.store}
                       />}/>

                <Route path="/profile"
                       render={() => <Profile
                           store={props.store}
                       />}/>


                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
