import React, {Component} from 'react';
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
import LogInPage from "./components/LogIn/Login";
import {initializeAppThunkCreator} from "./redux/actions/appAction";
import {connect} from  "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom"
import Preloader from "./common/Preloader/Preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/news" render={() => <NewsContainer />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/friends" render={() => <FriendsContainer />} />
                    <Route path="/login" render={() => <LogInPage />} />
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializedApp () {
            dispatch(initializeAppThunkCreator());
        }
    }
}

export default compose(withRouter,
    connect(mapStateToProps, mapDispatchToProps))(App);
