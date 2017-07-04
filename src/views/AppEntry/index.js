import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import asyncComponent from '../../lib/utils/asyncComponent';

import './styles.css';

const Home = asyncComponent(() => System.import('views/Home').then(module => module.default));
const StreamView = asyncComponent(() => System.import('views/StreamView').then(module => module.default));

const AppEntry = props => (
  <Provider store={props.store}>
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/view" component={StreamView} />
      </div>
    </Router>
  </Provider>
);

AppEntry.propTypes = {
  store: React.PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default AppEntry;
