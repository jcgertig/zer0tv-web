import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StreamList from '../../components/StreamList';
import SearchTypeahead from '../../components/SearchTypeahead';

import { searchForStreams } from '../../actions/SearchActions';

import './styles.css';

class Search extends Component {
  static propTypes = {
    search: PropTypes.func,
    streams: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  };

  state = {
    result: undefined,
  };

  handleSelect = (game) => {
    this.setState({ result: game });
    this.props.search(game.name);
  }

  render() {
    const { streams, count } = this.props;
    const { result } = this.state;
    return (
      <div className="Home">
        <SearchTypeahead value={this.state.result} onSelect={this.handleSelect} />
        {result && (
          <img
            src={result.image.medium_url}
            style={{ width: 200, marginTop: 10 }}
            role="presentation"
          />
        )}
        <StreamList
          count={count}
          streams={streams}
          onClick={console.log}
        />
      </div>
    );
  }
}

const connectState = state => ({
  streams: state.search.streams,
  count: state.search._total, // eslint-disable-line
});

const conenctDispatch = dispatch => ({
  search: (...args) => dispatch(searchForStreams(...args)),
});

export default connect(connectState, conenctDispatch)(Search);
