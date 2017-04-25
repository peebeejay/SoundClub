import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { receiveNowPlaying } from '../../actions/now_playing_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.receiveNowPlaying(this.props.song);
  }

  render() {

    if (this.props.now_playing &&
        this.props.now_playing.playing &&
        this.props.now_playing.song.id === this.props.song.id) {

      // Pause Button
      return(
        <a className={`pause-play-button ${this.props.type}-pause-button`} onClick = { this.handleClick }>
          <i className="fa fa-pause fa-2x"></i>
        </a>
      );
    }

    // Play Button
    else {
      return(
        <a className={`pause-play-button ${this.props.type}-play-button`} onClick = { this.handleClick }>
          <i className="fa fa-play fa-2x"></i>
        </a>
      );
    }
  }
}

// Likely add 'now-playing-song' here so the play button knows which
// version to render ~ (play, pause)
const mapStateToProps = (state, ownProps) => ({
  now_playing: state.now_playing,
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
