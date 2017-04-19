import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from "../../../actions/session_actions";
import { showModal, hideModal } from '../../../actions/modal_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedInUser = this.loggedInUser.bind(this);
  }

  //temp method
  loggedInUser() {
    if (this.props.currentUser) {
      return (<li><Link to={"/"}>{this.props.currentUser.username}</Link></li>);
    } else {
      return "";
    }
  }

  render() {

    if (this.props.currentUser) {
      // Render when logged in **
      return(
        <section className="navbar">
          <header className="navbar-content">
            <ul>
              <li><Link className="logo-temp" to={"/"}>SoundClub</Link></li>
              <li><Link className="nav-home" activeClassName="active" to={"/stream"}>Home</Link></li>
              <li><Link className="nav-discover" activeClassName="active" to={"/discover"}>Discover</Link></li>
            </ul>
            <ul>
              <li><Link to={"/upload"} activeClassName="active-upload">Upload</Link></li>
              {this.loggedInUser()}
              <li><button className="nav-signout-button" onClick={() => this.props.logout()}> Sign Out</button></li>
            </ul>
          </header>
        </section>
      );
    }

    else {
      return(
        // Render when NO current user **
        <section className="navbar">
          <header className="navbar-content">
            <ul>
              <li><Link className="logo-temp" to={"/"}>SoundClub</Link></li>
              <li><Link className="nav-home" activeClassName="active" to={"/stream"}>Home</Link></li>
              <li><Link className="nav-discover" activeClassName="active" to={"/discover"}>Discover</Link></li>
            </ul>
            <ul>
              <li className="navbar-signup-section">
                <button className="navbar-signin">Guest</button>
                <button className="navbar-signin" onClick={ () => this.props.showModal("loginForm") }>Sign In</button>
                or
                <button className="navbar-signup" onClick={ () => this.props.showModal("createUserForm") }>Create account</button>
              </li>
              <li><Link to={"/upload"} activeClassName="active-upload">Upload</Link></li>

            </ul>
          </header>
        </section>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    ownProps: ownProps
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    logout: () => dispatch(logout()),
    hideModal: (modal_name) => dispatch(hideModal(modal_name)),
    showModal: (modal_name) => dispatch(showModal(modal_name))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
