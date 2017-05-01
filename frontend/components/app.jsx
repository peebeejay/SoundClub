import React from 'react';
import Modals from './modals/modals.jsx';
import AudioPlayer from './main_components/audio/audio_player.jsx';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div onKeyDown={ this.handleKeyPress }>
        <Modals />
        { this.props.children }
        <AudioPlayer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nowPlaying: state.nowPlaying
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNowPlaying: (song) => dispatch(receiveNowPlaying(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
