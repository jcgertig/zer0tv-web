import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { apiGetReq } from 'fetchum';
import 'react-select/dist/react-select.css';
import './styles.css';

class SearchTypeahead extends Component {
  static displayName = 'SearchTypeahead';

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    value: PropTypes.object, // eslint-disable-line
  };

  getOptions = query => apiGetReq('/v1/typeahead', { query })
    .then(res => ({
      options: res.data.map((item) => {
        const data = { ...item };
        data.value = item.name;
        data.label = item.name;
        data.className = 'SearchTypeaheadOption';
        return data;
      }),
    }))

  render() {
    return (
      <Select.Async
        value={this.props.value}
        className="SearchTypeahead"
        loadOptions={this.getOptions}
        onChange={this.props.onSelect}
      />
    );
  }
}

export default SearchTypeahead;
