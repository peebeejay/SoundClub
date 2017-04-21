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
    if (this.props.location.pathname === '/discover') {
      discoverActive = true;
    } else if (this.props.location.pathname === '/stream') {
      streamActive = true;
    }

    return(
      <div className="left-tabs-nav">
        <ul className="left-tabs-list">
          <li className={streamActive ? "active-li" : ""}><Link to={"/stream"} activeClassName="active" >Stream</Link></li>
          <li className={discoverActive ? "active-li" : ""}><Link to={"/discover"} activeClassName="active">Discover</Link></li>
        </ul>
      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LeftTabsNavigation));
