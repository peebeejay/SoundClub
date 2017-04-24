import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { receiveNowPlaying } from '../../actions/now_playing_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { playing: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.receiveNowPlaying(this.props.song);
    // this.setState( playing: togglePlaying() );
  }



  render() {

    if (this.props.now_playing &&
        this.props.now_playing.playing &&
        this.props.now_playing.song.id === this.props.song.id) {
      return(
        <div className="play-button">
          <a className="round-button-pause" onClick = { this.handleClick }>
            <i className="fa fa-pause fa-2x"></i>
          </a>
        </div>
      );
    } else {
      return(
        <div className="play-button">
          <a className="round-button" onClick = { this.handleClick }>
            <i className="fa fa-play fa-2x"></i>
          </a>
        </div>
      );
    }
  }
}


// Likely add 'now-playing-song' here so the play button knows which
// version to render ~ (play, pause)
const mapStateToProps = (state, ownProps) => ({
  now_playing: state.now_playing
});


// Likely map a function that plays or pauses a song here.
const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNowPlaying: (song) => dispatch(receiveNowPlaying(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
