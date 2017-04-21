import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class LeftTabsNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let discoverActive;
    let streamActive;
    let chartsActive;
    if (this.props.location.pathname === '/discover') {
      discoverActive = true;
    } else if (this.props.location.pathname === '/stream') {
      streamActive = true;
    } else if (this.props.location.pathname === '/charts') {
      chartsActive = true;
    }
    // debugger
    return(
      <div className="left-tabs-nav">
        <ul className="left-tabs-list">
          { this.props.currentUser && <li className={streamActive ? "active-li" : ""}><Link to={"/stream"} activeClassName="active" >Stream</Link></li> }
          { this.props.currentUser && <li className={discoverActive ? "active-li" : ""}><Link to={"/discover"} activeClassName="active">Discover</Link></li> }
          <li className={chartsActive ? "active-li" : ""}><Link to={"/charts"} activeClassName="active">Charts</Link></li>
        </ul>
      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LeftTabsNavigation));
