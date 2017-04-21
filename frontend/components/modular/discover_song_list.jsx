import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { discoverSongs, removeSongs } from '../../actions/song_actions';
import DiscoverSongListItem from './discover_song_list_item.jsx';
import DiscoverSongBlank from './discover_song_blank.jsx';

class DiscoverSongList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let that = this;
    this.props.removeSongs();

    // debugger
    window.setTimeout(() => {
      this.props.discoverSongs().then(() => {
        let x = that;
        // debugger
      });
      console.log("done");
    }, 800);
  }

  render() {
    let recievedSongs = false;
    if (this.props.songs.length !== 0) {
      // debugger
      window.setTimeout(() => console.log("complete"), 2000);
      recievedSongs = true;
    }

    return(
      <div className="discover-song-list">
        <ul className="discover-song-list-row">
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[0]}/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[1]}/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[2]}/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[3]}/> : <DiscoverSongBlank /> }</li>
        </ul>

        <ul className="discover-song-list-row">
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[4]}/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[5]}/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[6]}/> : <DiscoverSongBlank /> }</li>
          <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[7]}/> : <DiscoverSongBlank /> }</li>
        </ul>
      </div>
    );
  }
}

// <ul className="discover-song-list-row">
//   <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[8]}/> : <DiscoverSongBlank /> }</li>
//   <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[9]}/> : <DiscoverSongBlank /> }</li>
//   <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[10]}/> : <DiscoverSongBlank /> }</li>
//   <li className={"discover-item"}>{ recievedSongs ? <DiscoverSongListItem song={this.props.songs[11]}/> : <DiscoverSongBlank /> }</li>
// </ul>

const mapStateToProps = (state, ownProps) => {
  return({
    songs: Object.keys(state.songs).map((id) => {
      return state.songs[id];
    })
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
