import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SessionFormContainer from './sessions/session_form_container';
import Modals from './modals/modals.jsx';
import AudioPlayerNew from './main_components/audio/audio_player_new.jsx';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    // e.stopPropagation();
    // console.log("handling keypress");
  }

  render() {
    return(
      <div onKeyDown={ this.handleKeyPress }>
        <Modals />
        { this.props.children }
        <AudioPlayerNew />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nowPlaying: state.nowPlaying
  // type: ownProps.type
});

// Likely map a function that plays or pauses a song here.
const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNowPlaying: (song) => dispatch(receiveNowPlaying(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//
// const App = ({ children }) => {
//   return (
//     <div>
//       <Modals />
//       { children }
//       <AudioPlayerNew />
//     </div>
//   );
// };
//
// export default App;
