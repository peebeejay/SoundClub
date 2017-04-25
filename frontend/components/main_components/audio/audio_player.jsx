import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.state = { duration: '', playTime: 0 };
  }

  updatePlayTime() {
    this.interval = setInterval(() => {
      if (this.state.playTime < this.music.duration ) {
        this.setState({ playTime: this.state.playTime + 1 });
        console.log(this.state.playTime);
      }
    }, 1000);
  }

  componentWillReceiveProps(newProps) {
    // If newProps includes the same 'now_playing' song, then simply toggle pause / play.
    // The second conditional filters for global state changes of the value of now_playing.playing.
    if (newProps.now_playing.song.id === this.props.now_playing.song.id &&
      newProps.now_playing.playing !== this.props.now_playing.playing) {
        this.togglePlay(newProps);
    }
  }

  togglePlay(newProps) {
    let props = newProps ? newProps : this.props;

    if (props.now_playing.playing) {
      this.music.play();
      this.updatePlayTime();
      // this.pButtonIcon.className= "";
      this.pButtonIcon.className = "fa fa-pause fa-2x";
      // this.pButton.className = "";
      this.pButton.className="round-button-audio-player-pause";
    } else {
      this.music.pause();
      clearInterval(this.interval);
      // this.pButtonIcon.className = "";
      this.pButtonIcon.className = "fa fa-play fa-2x";
      // this.pButton.className = "";
      this.pButton.className="round-button-audio-player";
    }

    this.setState({ duration: this.music.duration });
    console.log("duration: " + this.music.duration);
  }

  render() {
    let _song;
    if (Object.keys(this.props.now_playing.song).length > 0) {
      _song = this.props.now_playing.song;
    }

    return(
      <div className="audio-player">
        <div className="player-controls">
          <div className="back-button">BackButton</div>
          <div className="play-button">
            <button ref={(pButton) => { this.pButton = pButton; }} className="round-button-audio-player" onClick={this.togglePlay}>
              <i ref={(pButtonIcon) => { this.pButtonIcon = pButtonIcon; }} className="fa fa-play fa-2x"></i>
            </button>

          </div>
          <div className="forward-button">ForwardButton</div>
        </div>

        <div className="audio-tracker-container">
          <div className="elapsed-time">{ this.state.playTime }</div>
          <div className="audio-tracker" >
            <div className="playhead" ></div>
          </div>
          <div className="duration">{ Math.floor(this.state.duration) }</div>
        </div>

        <div className="audio-information">Audio Info</div>

        <div className="like-button">Like Button</div>

        { _song &&
        <audio autoPlay="true" ref={(music) => { this.music = music; }} src={this.props.now_playing.song.audio} /> }
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return({
    now_playing: state.now_playing
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AudioPlayer));


// <source src="http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/001/original/open-uri20170424-2781-ji89lm?1493050157" type="audio/mpeg" />
