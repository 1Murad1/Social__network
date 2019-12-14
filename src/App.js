import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./containers/DialogsContainer";
import FriendsContainer from "./containers/FriendsContainer";
import NewsContainer from "./containers/NewsContainer";
import UsersContainer from "./containers/UsersContainer";
import ProfileContainer from "./containers/ProfileContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App(props) {
  return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="wrapper-content">
              <Route path = "/profile/:userId?" render = {() => <ProfileContainer />} />
              <Route path = "/dialogs" render = {() => <DialogsContainer />} />
              <Route path = "/news" render = {() => <NewsContainer />} />
              <Route path = "/music" render = {() => <Music />} />
              <Route path = "/settings" render = {() => <Settings />} />
              <Route path = "/users" render = {() => <UsersContainer />} />
              <Route path = "/friends" render = {() => <FriendsContainer />} />
          </div>
          <Footer />
        </div>
  );
}

export default App;
