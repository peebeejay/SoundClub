import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { discoverSongs, removeSongs } from '../../actions/song_actions';
import DiscoverSongListItem from './discover_song_list_item.jsx';
import DiscoverSongBlank from './discover_song_blank.jsx';

class DiscoverSongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { receivedSongs: false }
  }

  componentDidMount() {
    let that = this;
    this.state.receivedSongs = false;
    this.props.removeSongs();

    window.setTimeout(() => {
      this.props.discoverSongs().then(() => {
        let x = that;
        this.setState({ receivedSongs: true })
      });
    }, 500);
  }

  render() {
    const top_row = [0, 1, 2, 3].map((el) => {
      return(
        <li className={"discover-item"}>
          { this.state.receivedSongs ?
            <DiscoverSongListItem song={this.props.songs[el]}
                                  currentUser={ this.props.currentUser }
                                  type={ this.props.type } /> :
            <DiscoverSongBlank type={ this.props.type }/> }
        </li>
      )
    });

    const bottom_row = [4, 5, 6, 7].map((el) => {
      return(
        <li className={"discover-item"}>
          { this.state.receivedSongs ?
            <DiscoverSongListItem song={this.props.songs[el]}
                                  currentUser={ this.props.currentUser }
                                  type={ this.props.type } /> :
            <DiscoverSongBlank type={ this.props.type }/> }
        </li>
      )
    });


    return(
      <div className="discover-song-list">
        <ul className="discover-song-list-row">
          { top_row }
        </ul>

        <ul className="discover-song-list-row">
          { bottom_row }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    songs: Object.keys(state.songs).map((id) => {
      return state.songs[id];
    }),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    discoverSongs: (songs) => dispatch(discoverSongs(songs)),
    removeSongs: () => dispatch(removeSongs())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DiscoverSongList));
