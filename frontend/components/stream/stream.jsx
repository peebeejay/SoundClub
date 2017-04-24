import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import LeftTabsNavigation from '../modular/left_tabs_navigation.jsx';
import SongList from '../modular/song_list.jsx';
import { fetchSongs } from '../../actions/song_actions';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    // debugger
    return(
      <Main>
        <div className={"content-left-wrapper"}>
          <div className={"content-left"}>
            <LeftTabsNavigation />
            <div className="left-tab-header">Hear the latest songs from the people you follow:</div>
            <SongList songs={this.props.songs}/>
          </div>
        </div>
        <div className={"content-right-wrapper"}>
          <div className={"content-right"}>
            Right Content

          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    songs: Object.keys(state.songs).map((id) => {
      return state.songs[id];
    })
  });
};


// Will have to eventually replace fetchSongs with something that returns
// the latest songs uploaded by users that the current_user follows.
// For now though... fetchSongs

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchSongs: () => dispatch(fetchSongs())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
