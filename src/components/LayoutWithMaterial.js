import React, { Component } from 'react';

import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class LayoutWithMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {menuOpen: false};
    }

    handleToggle = () => this.setState({menuOpen: !this.state.menuOpen});

    render() {
        return (<MuiThemeProvider>
            <div className="App">
                <AppBar
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
        </MuiThemeProvider>);
    }
}

export default LayoutWithMaterial;
