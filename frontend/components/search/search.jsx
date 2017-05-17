import React from 'react';
import Main from '../main.jsx';
import LeftTabsNavigation from '../modular/left_tabs_navigation.jsx';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import SongList from '../modular/song_list.jsx';
import { fetchSongs } from '../../actions/song_actions';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div className={"content-left-wrapper"}>
          <div className={"content-left"}>

            <div className="left-tabs-nav">
              <ul className="left-tabs-list">
                <li className="active-li" >Search</li>
              </ul>
            </div>

            <div className="left-tab-header">{ this.props.songs.length } Results:</div>
            <SongList songs={this.props.songs}
                      currentUser={ this.props.currentUser }/>
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
    }),
    currentUser: state.session.currentUser
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
)(withRouter(Search));
