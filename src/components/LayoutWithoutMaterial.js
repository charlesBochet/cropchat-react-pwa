import React, { Component } from 'react';

class LayoutWithoutMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {menuOpen: false};
    }

    handleToggle = () => this.setState({menuOpen: !this.state.menuOpen});

    render() {
        return (<div>
            <div className="App">
                <div style={{width:'100%', backgroundColor: 'rgb(0, 188, 212)', height: '64px'}}
                    title="Cropchat"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                {this.props.children}
            </div>
        </div>);
    }
}

export default LayoutWithoutMaterial;
