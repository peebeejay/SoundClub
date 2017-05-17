import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchRandomSong } from '../../../actions/song_actions';
import BackButton from './buttons/back_button';
import PlayButton from '../../modular/play_button.jsx';
import NextButton from './buttons/next_button';
import VolumeButton from './buttons/volume_button';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this._printTime = this._printTime.bind(this);
    this.playNext = this.playNext.bind(this);
    this.state = { playTime: 0, width: 0, fetching: false };
  }

  updatePlayTime() {
    // debugger
    this.interval = setInterval(() => {
      if ( this.music.currentTime !== this.state.playTime ) {
        let newWidth = this.music.currentTime / this.props.nowPlaying.song.duration * 100
        this.setState( {playTime: this.music.currentTime, width: newWidth });
      }
      else if ( this.music.currentTime &&
                this.music.currentTime > this.props.nowPlaying.song.duration &&
                this.state.playTime !== 0 ) {
        // console.log("currentTime: " + this.music.currentTime + " duration: " + this.props.nowPlaying.song.duration);
        // console.log("song complete");
        this.playNext();
        clearInterval(this.interval);
      } else if ( this.music.currentTime !== 0 || this.state.playTime !==0 ) {
        // console.log("currentTime: " + this.music.currentTime + " duration: " + this.props.nowPlaying.song.duration + " playTime: " + this.state.playTime );
        clearInterval(this.interval);
      }
    }, 200);
  }

  playNext() {
    if (this.state.fetching === false) {
      this.state.fetching = true;
      this.props.fetchRandomSong().then(
        () => this.state.fetching = false
      )
    }
  }

  componentWillReceiveProps(newProps) { // PRE-RENDER
    // If newProps includes the same 'nowPlaying' song, then simply toggle pause / play.
    // The second conditional filters for global state changes of the value of nowPlaying.playing.

    if (newProps.nowPlaying.song.id === this.props.nowPlaying.song.id &&
      newProps.nowPlaying.playing !== this.props.nowPlaying.playing) {
        // debugger
        this.togglePlay(newProps);
    }
  }

  componentDidUpdate(prevProps, prevState) { // POST-RENDER
    // If current nowPlaying song === previous nowPlaying song
    if (this.props.nowPlaying.song.id !== prevProps.nowPlaying.song.id) {
      // debugger
      this.updatePlayTime();
    }
  }

  togglePlay(newProps) {
    let props = newProps ? newProps : this.props;

    if (props.nowPlaying.playing) {
      this.music.play();
      this.updatePlayTime();
      // debugger
    } else {
      this.music.pause();
      // debugger
      clearInterval(this.interval);
    }
  }

  _printTime(duration) {
    let mins = Math.floor(duration / 60);
    let secs = Math.floor(duration - mins * 60);

    if (secs < 10)
      secs = `0${secs}`;

    return (
      `${mins}:${secs}`
    )
  }

  render() {
    let _song;
    if (Object.keys(this.props.nowPlaying.song).length > 0)
      _song = this.props.nowPlaying.song;

    return(
      <div className={ _song ? "ap" : "ap hidden" } id="ap">
          <div className="ap__inner">

            <div className="ap__item ap__item--playback">
              <BackButton />
              <PlayButton type={"player"} />
              <NextButton />
            </div>

            <div className="ap__item ap__item--track">
              <div className="track-now-playing-custom">
                { _song && <span className="track__time--current">{ this._printTime(this.music.currentTime) }</span> }
              </div>

              <div className="track">
                <div className="progress-container">
                  <div className="progress">
                    <div className="progress__bar" ref={(progressBar) => { this.progressBar = progressBar; }} style={{ width: `${this.state.width}%` }}  ></div>
                    <div className="progress__preload"></div>
                  </div>
                </div>
              </div>

              <div className="track-duration-custom">
                { _song && <span className="track__time--duration">{ this._printTime(this.props.nowPlaying.song.duration) }</span> }
              </div>
            </div>

            {/*<div className="ap__item ap__item--settings">
              <div className="ap__controls volume-container">
                <VolumeButton />

                <div className="volume">
                  <div className="volume__track">
                    <div className="volume__bar"></div>
                  </div>
                </div>
              </div>
            </div>*/}

            <div className="ap__item ap__item--info">
              <div className="audio-player-image">
                { _song && <Link to={`songs/${this.props.nowPlaying.song.id}`}><img src={this.props.nowPlaying.song.img} /></Link> }
              </div>
              <div className="audio-player-info">
                <div className="audio-player-playing-track-text"><Link to={`songs/${this.props.nowPlaying.song.id}`}>Playing track</Link></div>
                <div className="audio-player-track-info"><Link to={`songs/${this.props.nowPlaying.song.id}`}>{this.props.nowPlaying.song.title}</Link></div>
              </div>

            </div>
          </div>
          { _song ?
            <audio autoPlay="true" ref={(music) => { this.music = music; }} src={this.props.nowPlaying.song.audio} /> :
            <audio autoPlay="true" ref={(music) => { this.music = music; }} />
            }
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  nowPlaying: state.nowPlaying
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRandomSong: () => dispatch(fetchRandomSong())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AudioPlayer));
