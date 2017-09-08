import React, { Component } from 'react';
import logo from '../logo.svg';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {menuOpen: false};
    }

    handleToggle = () => this.setState({menuOpen: !this.state.menuOpen});

    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{this.props.title}</h2>
                </div>
                <div style={{}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Page;
