import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

const StreamView = () => (
  <div className="StreamView">
    Future Home of The Stream View
  </div>
);

StreamView.propTypes = {
  dispatch: PropTypes.func,
  streams: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

const connectState = state => ({
  streams: state.streams,
});

export default connect(connectState)(StreamView);
