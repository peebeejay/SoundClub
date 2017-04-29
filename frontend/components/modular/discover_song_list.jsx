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
      console.log("done");
    }, 800);
  }

  render() {
    return(
      <div className="discover-song-list">
        <ul className="discover-song-list-row">
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[0]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[1]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[2]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[3]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
        </ul>

        <ul className="discover-song-list-row">
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[4]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[5]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[6]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ this.state.receivedSongs ? <DiscoverSongListItem song={this.props.songs[7]} currentUser={ this.props.currentUser }/> : <DiscoverSongBlank /> }</li>
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
