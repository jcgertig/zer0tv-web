/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const StreamList = ({ streams, count, onClick }) => (
  <div>
    <h2 style={{ textAlign: 'center' }}>{count} Results</h2>
    <div className="StreamList">
      {streams.map((stream, index) => (
        <div className="StreamListItem" key={index} onClick={() => onClick(stream)}>
          <img className="StreamListItem-preview" src={stream.preview.large} />
          {stream.channel.display_name} - {stream.viewers} viewers
        </div>
      ))}
    </div>
  </div>
);

StreamList.propTypes = {
  streams: PropTypes.array.isRequired, // eslint-disable-line
  count: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default StreamList;
