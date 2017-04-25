import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import BackButton from './buttons/back_button';
import PlayButton from '../../modular/play_button.jsx';
import NextButton from './buttons/next_button';

class AudioPlayerNew extends React.Component {
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
    // If newProps includes the same 'nowPlaying' song, then simply toggle pause / play.
    // The second conditional filters for global state changes of the value of nowPlaying.playing.
    if (newProps.nowPlaying.song.id === this.props.nowPlaying.song.id &&
      newProps.nowPlaying.playing !== this.props.nowPlaying.playing) {
        this.togglePlay(newProps);
    }
  }

  togglePlay(newProps) {
    // debugger

    let props = newProps ? newProps : this.props;

    if (props.nowPlaying.playing) {
      this.music.play();
      this.updatePlayTime();
    } else {
      this.music.pause();
      clearInterval(this.interval);
    }

    this.setState({ duration: this.music.duration });
    console.log("duration: " + this.music.duration);
  }

  render() {
    let _song;
    // debugger
    if (Object.keys(this.props.nowPlaying.song).length > 0) {
      _song = this.props.nowPlaying.song;
    }

    return(
      <div>
        <div className="ap" id="ap">
          <div className="ap__inner">

            <div className="ap__item ap__item--playback">
              <BackButton />
              <PlayButton type={"player"} />
              <NextButton />
            </div>
          </div>
        </div>
        { _song &&
          <audio autoPlay="true" ref={(music) => { this.music = music; }} src={this.props.nowPlaying.song.audio} /> }
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return({
    nowPlaying: state.nowPlaying
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AudioPlayerNew));


// <source src="http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/001/original/open-uri20170424-2781-ji89lm?1493050157" type="audio/mpeg" />


//
// <div class="ap__item ap__item--track">
//   <div class="track">
//     <div class="track__title">Queue is empty</div>
//     <div class="track__time">
//       <span class="track__time--current">--</span>
//       <span> / </span>
//       <span class="track__time--duration">--</span>
//     </div>
//
//     <div class="progress-container">
//       <div class="progress">
//         <div class="progress__bar"></div>
//         <div class="progress__preload"></div>
//       </div>
//     </div>
//
//   </div>
// </div>
//
//
//
// <div class="ap__item ap__item--settings">
//   <div class="ap__controls volume-container">
//     <button class="volume-btn">
//       <svg class="icon-volume-on" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333" width="24" height="24" viewBox="0 0 24 24">
//         <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q2.484 1.219 2.484 4.031zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
//       </svg>
//       <svg class="icon-volume-off" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333" width="24" height="24" viewBox="0 0 24 24">
//         <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.734 1.359-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.25-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q2.484 1.219 2.484 4.031z"></path>
//       </svg>
//     </button>
//     <div class="volume">
//       <div class="volume__track">
//         <div class="volume__bar"></div>
//       </div>
//     </div>
//   </div>
//   <button class="ap__controls ap__controls--repeat">
//     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333" width="24" height="24" viewBox="0 0 24 24">
//       <path d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031h-1.969v-6h12v-3l3.984 3.984-3.984 3.984v-3h-10.031z"></path>
//     </svg>
//   </button>
//   <button class="ap__controls ap__controls--playlist">
//     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333" width="24" height="24" viewBox="0 0 24 24">
//       <path d="M17.016 12.984l4.969 3-4.969 3v-6zM2.016 15v-2.016h12.984v2.016h-12.984zM18.984 5.016v1.969h-16.969v-1.969h16.969zM18.984 9v2.016h-16.969v-2.016h16.969z"></path>
//     </svg>
//   </button>
// </div>
