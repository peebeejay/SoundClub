import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { receiveNowPlaying } from '../../actions/now_playing_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(song) {
    return () => {
      this.props.receiveNowPlaying(song);
    }
  }

  render() {
    // Checks what type of play button should be rendered.
    // Available types are { song-list, discover-list, player }
    if ( ["discover-list", "song-list", "song-details"].includes(this.props.type)) {
      // Play Button for discover-lists and song-list types
      if (this.props.nowPlaying &&
        this.props.nowPlaying.playing &&
        this.props.nowPlaying.song.id === this.props.song.id) {

          // Pause Button
          return(
            <a className={`pause-play-button ${this.props.type}-pause-button`} onClick = { this.handleClick(this.props.song) }>
              <i className="fa fa-pause fa-2x"></i>
            </a>
          );
        }

        // Play Button
        else {
          return(
            <a className={`pause-play-button ${this.props.type}-play-button`} onClick = { this.handleClick(this.props.song) }>
              <i className="fa fa-play fa-2x"></i>
            </a>
          );
        }

    } else if (this.props.type === "player") {
      // Play Button for player type
      return(
        <button className="ap__controls ap__controls--toggle" onClick={ this.handleClick(this.props.nowPlaying.song) }>
          <svg className="icon-play"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#333"
            width="36"
            height="36"
            viewBox="0 0 36 36">

            { !this.props.nowPlaying.playing ?
              <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path> :
                <path d="M 12,26 16.33,26 16.33,10 12,10 z M 20.66,26 25,26 25,10 20.66,10 z"></path>}
                </svg>
              </button>
            );

    } else {
      return (
        <div></div>
      )
    }

  }
}

// Likely add 'now-playing-song' here so the play button knows which
// version to render ~ (play, pause)
const mapStateToProps = (state, ownProps) => ({
  nowPlaying: state.nowPlaying,
  type: ownProps.type
});

// Likely map a function that plays or pauses a song here.
const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNowPlaying: (song) => dispatch(receiveNowPlaying(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
