import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout, login } from "../../../actions/session_actions";
import { showModal, hideModal, toggleModal } from '../../../actions/modal_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }

  loginGuest() {
    return () => {
      this.props.login({ username: "Guest", password: "YesWeCan" }).then(
        () => this.props.router.push('/stream')
      );
    };
  }

  logout() {
    return () => {
      this.props.logout().then(
        () => this.props.router.push('/')
      );
    };
  }

  render() {
    if (this.props.currentUser) {
      // Render when logged in **
      let discoverActive;
      if (this.props.location.pathname === '/discover')
        discoverActive = true;


      return(
        <section className="navbar">
          <header className="navbar-content">
            <ul>
              <li className="soundclub-logo"><Link className="logo-temp" to={"/"}></Link></li>
              <li><Link className={discoverActive ? "active nav-home" : "nav-home"} activeClassName="active" to={"/stream"}>Home</Link></li>
              <li><Link className="nav-charts" activeClassName="active" to={"/charts"}>Charts</Link></li>
            </ul>
            <ul>
              <li><Link to={"/upload"} activeClassName="active-upload">Upload</Link></li>
              <li className="navbar-username"><Link to={`/artists/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link></li>
              <li><button className="nav-signout-button" onClick={this.logout()}> Sign Out</button></li>
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
              <li className="soundclub-logo"><Link className="logo-temp" to={"/"}></Link></li>
              <li><Link className="nav-discover" activeClassName="active" to={"/charts"}>Charts</Link></li>
            </ul>
            <ul>
              <li className="navbar-signup-section">
                <button className="navbar-signin" onClick={ this.loginGuest() }>Guest</button>
                <button className="navbar-signin" onClick={ () => this.props.toggleModal("loginForm") }>Sign In</button>
                or
                <button className="navbar-signup" onClick={ () => this.props.toggleModal("createUserForm") }>Create account</button>
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
    login: (user) => dispatch(login(user)),
    hideModal: (modal_name) => dispatch(hideModal(modal_name)),
    showModal: (modal_name) => dispatch(showModal(modal_name)),
    toggleModal: (modal_name) => dispatch(toggleModal(modal_name))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
