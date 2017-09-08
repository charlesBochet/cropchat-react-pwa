import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import ContentAdd from 'material-ui/svg-icons/content/add';
import Page from '../components/Page';

const style = {
    position: 'fixed',
    right: 20,
    bottom: 20
};

class Home extends Component {
    render() {
        const { cat } = this.props;

        const catsList = (cat !== undefined) ? Object.keys(cat).map(
            (key, id) => (
                <img src={cat[key].url} style={{width: '100%', marginTop: '10px'}} alt={cat[key].comment} />
                )
        ) : 'Loading';

        return (
            <Page title="Home">
                <ul style={{padding: '10px'}}>
                    {catsList}
                </ul>
                <FloatingActionButton href="/post" secondary={true} style={style}>
                    <ContentAdd />
                </FloatingActionButton>
            </Page>
        );
    }
}

export default compose(
    firebaseConnect([
        '/cat'
    ]),
    connect(
        ({ firebase: { data: { cat } } }) => ({
            cat
        })
    )
)(Home)
