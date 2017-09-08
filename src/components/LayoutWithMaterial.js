import React, { Component } from 'react';

import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import { Provider } from 'react-redux'
import firebase from 'firebase'

const rootReducer = combineReducers({
    firebase: firebaseStateReducer
})

let config = {
    apiKey: "AIzaSyCqM9bPtHmERf7Zcf2kL-ktaJZu8711Rng",
    authDomain: "cropchat-50ff7.firebaseapp.com",
    databaseURL: "https://cropchat-50ff7.firebaseio.com",
    projectId: "cropchat-50ff7",
    storageBucket: "cropchat-50ff7.appspot.com",
    messagingSenderId: "187222083715"
};
const rrfConfig = { userProfile: 'users' }

const firebaseApp = firebase.initializeApp(config)

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseApp, rrfConfig),
)(createStore)

const store = createStoreWithFirebase(rootReducer, {})

class LayoutWithMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {menuOpen: false};
    }

    handleToggle = () => this.setState({menuOpen: !this.state.menuOpen});

    render() {
        return (<Provider store={store}>
            <MuiThemeProvider>
                <div className="App">
                    <AppBar
                        style={{position: 'fixed'}}
                        title="Cropchat"
                        onLeftIconButtonTouchTap={this.handleToggle}
                    />
                    <Drawer
                        open={this.state.menuOpen}
                        docked={false}
                        onRequestChange={(menuOpen) => this.setState({menuOpen})}
                    >
                        <MenuItem
                            onClick={this.handleToggle}
                            containerElement={<Link to="/" />}
                            primaryText="Home"
                        />
                        <MenuItem
                            onClick={this.handleToggle}
                            containerElement={<Link to="/post" />}
                            primaryText="Post"
                        />
                    </Drawer>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        </Provider>);
    }
}

export default LayoutWithMaterial;
