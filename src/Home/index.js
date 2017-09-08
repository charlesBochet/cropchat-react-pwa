import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Page from '../components/Page';
import PicturesListPlacehoder from '../components/PicturesListPlaceholder';
import Picture from './components/Picture';

class Home extends Component {
  render() {
    const { cat } = this.props;

    const catsList =
      cat !== undefined ? (
        Object.keys(cat).map((key, id) => (
          <Picture url={cat[key].url} comment={cat[key].comment} />
        ))
      ) : (
        <PicturesListPlacehoder />
      );

    return (
      <Page title="Home">
        <ul style={{ padding: '10px' }}>{catsList}</ul>
        <FloatingActionButton
          href="/post"
          secondary={true}
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          <ContentAdd />
        </FloatingActionButton>
      </Page>
    );
  }
}

export default compose(
  firebaseConnect(['/cat#limitToFirst=10']),
  connect(({ firebase: { data: { cat } } }) => ({
    cat,
  }))
)(Home);
