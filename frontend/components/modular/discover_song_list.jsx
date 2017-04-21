import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import DiscoverSongListItem from './discover_song_list_item.jsx';

class DiscoverSongList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="discover-song-list">
        <ul className="discover-song-list-row">
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
        </ul>

        <ul className="discover-song-list-row">
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
        </ul>

        <ul className="discover-song-list-row">
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
          <li className={"discover-item"}><DiscoverSongListItem /></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DiscoverSongList));
