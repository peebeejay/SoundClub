import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
// import Explore from './explore.jsx';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  loginGuest() {
    let that = this
    return () => {
      
      let x = that;
      this.props.login({ username: "Guest", password: "YesWeCan" }).then(
        () => this.props.router.push('/stream')
      );
    };
  }

  render() {
    return(
      <div className="main">
        <div className="splash-content-wrapper">
          <header className="splash-content">
            <ul>
              <li className="login-signup-section float-right"><span>SOUNDCLUB</span></li>
            </ul>
            <ul>
              <li className="login-signup-section float-left">
                <button className="login-signin" onClick={ this.loginGuest() }>Guest</button>
                <button className="login-signin" onClick={ () => this.props.toggleModal("loginForm") }>Sign In</button>
                <button className="login-signup" onClick={ () => this.props.toggleModal("createUserForm") }>Create account</button>
              </li>
            </ul>
          </header>

          <h2>Explore What's Trending</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    login: (user) => dispatch(login(user)),
    hideModal: (modal_name) => dispatch(hideModal(modal_name)),
    showModal: (modal_name) => dispatch(showModal(modal_name)),
    toggleModal: (modal_name) => dispatch(toggleModal(modal_name))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
