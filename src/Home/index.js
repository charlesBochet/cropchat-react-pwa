import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Page from '../components/Page';

const style = {
    position: 'absolute',
    right: 20,
    bottom: 20
};

class Home extends Component {
    render() {
        return (
            <Page title="Home">
                <FloatingActionButton href="/post" secondary={true} style={style}>
                    <ContentAdd />
                </FloatingActionButton>
            </Page>
        );
    }
}

export default Home;
