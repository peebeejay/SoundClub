import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import DiscoverSongList from '../modular/discover_song_list';

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
                <button className="login-signup" onClick={ () => this.props.router.push('/signup') }>Create account</button>
              </li>
            </ul>

            <div className="center-header">
              <div className="main-text">Connect on SoundClub</div>
              <div className="sub-text">Discover and listen to music from around the world</div>
              <div className="button">
                <button className="login-signup" onClick={ () => this.props.router.push('/signup') }>Sign up for free</button>
              </div>
            </div>
          </header>

          <h2>Explore What's Trending</h2>
            <div className={ "splash-discover" }>
              <DiscoverSongList type={ "splash" } />
            </div>
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
