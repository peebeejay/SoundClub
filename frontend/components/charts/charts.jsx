import React from 'react';
import Main from '../main.jsx';
import LeftTabsNavigation from '../modular/left_tabs_navigation.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Charts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div className={"content-left-wrapper"}>
          <div className={"content-left"}>
            <LeftTabsNavigation />
            <div className="left-tab-header">Listen to the most popular tracks:</div>
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

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Charts));
