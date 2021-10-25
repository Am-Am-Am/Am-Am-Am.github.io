import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {

    /*let postsData = [
      {id: 1, message: 'Привет'}
  ];*/

    /* let dialogsData = [
        {id: 1, name: 'Oxxxymiron1'},
        {id: 2, name: 'Oxxxymiron2'},
        {id: 3, name: 'Oxxxymiron3'},
        {id: 4, name: 'Oxxxymiron4'}
    ]

    let messageData = [
        {id: 1, message: 'Oxxxymiron1'},
        {id: 2, message: 'Oxxxymiron2'},
        {id: 3, message: 'Oxxxymiron3'},
        {id: 4, message: 'Oxxxymiron4'}
    ]*/

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile />*/}
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route exact path="/profile" render={() => <Profile postsData={props.postsData}/>}/>
                    <Route exact path="/news" render={() => <News />}/>
                    <Route exact path="/music" render={() => <Music />}/>
                    <Route exact path="/settings" render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
