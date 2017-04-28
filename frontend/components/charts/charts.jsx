import React from 'react';
import Main from '../main.jsx';
import LeftTabsNavigation from '../modular/left_tabs_navigation.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SongList from '../modular/song_list.jsx';
import { fetchSongs } from '../../actions/song_actions';

class Charts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    return(
      <Main>
        <div className={"content-left-wrapper"}>
          <div className={"content-left"}>
            <LeftTabsNavigation />
            <div className="left-tab-header">Listen to the most popular tracks:</div>
            <SongList songs={this.props.songs}/>
          </div>
        </div>
        <div className={"content-right-wrapper"}>
          <div className={"content-right"}>

          </div>
        </div>
      </Main>
    );
  }
}


// Eventually need functions that will check plays and rank accordingly.
const mapStateToProps = (state, ownProps) => {
  return({
    songs: Object.keys(state.songs).map((id) => {
      return state.songs[id];
    })
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchSongs: () => dispatch(fetchSongs())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Charts));
