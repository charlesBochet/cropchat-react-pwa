import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import Home from './home'
import Post from './post'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/post" component={Post}/>
            </Router>
        );
    }
}

export default App;
