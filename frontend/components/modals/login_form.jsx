import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import { merge } from 'lodash';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.update = this.update.bind(this);
    this.submitCredentials = this.submitCredentials.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  submitCredentials() {
    let that = this;

    return () => {
      let stateCopy = merge({}, this.state);
      this.state = { username: "", password: "" };
      let x = that;
      this.props.login(stateCopy).then(
        () => this.props.hideModal("loginForm"));
    };
  }

  cancel() {
    this.props.hideModal("loginForm");
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    let { isShowing } = this.props;
    return (
      <div className="confirm-modal">
        { isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
              <span className="confirm-modal-message">Login</span>

            <label>Username
                <input className="confirm-modal-input"
                       type="text"
                       value={this.state.username}
                       onChange={this.update('username')}/>
              </label>

              <label>Password
                <input className="confirm-modal-input"
                       type="text"
                       value={this.state.password}
                       onChange={this.update('password')}/>
              </label>

              <button className="btn" onClick={this.submitCredentials()}>Submit</button>
              <button className="btn" onClick={() => this.cancel()}>Cancel</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    isShowing: state.modal.loginForm
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  hideModal: (modal_name) => dispatch(hideModal(modal_name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
