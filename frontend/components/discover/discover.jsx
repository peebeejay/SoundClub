import React from 'react';
import Main from '../main.jsx';
import LeftTabsNavigation from '../modular/left_tabs_navigation.jsx';
import DiscoverSongList from '../modular/discover_song_list.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div className={"content-left-wrapper"}>
          <div className={"content-left"}>
            <LeftTabsNavigation />
            <div className="left-tab-header">Suggested tracks curated just for you:</div>
            <DiscoverSongList type={ "discover" }/>
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

const mapStateToProps = (state, ownProps) => {
  return({

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Discover));
