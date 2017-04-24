import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false }
  }

  render() {

    if (this.state.playing) {
      return(
        <div className="play-button">
          <a className="round-button">
            <i className="fa fa-pause fa-2x"></i>
          </a>
        </div>
      )
    } else {
      return(
        <div className="play-button">
          <a className="round-button">
            <i className="fa fa-play fa-2x"></i>
          </a>
        </div>
      )
    }
  }
}


// Likely add 'now-playing-song' here so the play button knows which
// version to render ~ (play, pause)
const mapStateToProps = (state, ownProps) => ({

})


// Likely map a function that plays or pauses a song here.
const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
