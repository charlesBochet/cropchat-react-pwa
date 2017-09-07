import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

class Page extends Component {
    render() {
        return (<div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{this.props.title}</h2>
            </div>
            <p className="App-intro">
                This is the {this.props.title} page.
            </p>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/post">Post</Link>
            </p>
        </div>);
    }
}

export default Page;
