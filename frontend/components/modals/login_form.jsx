import keydown from 'react-keydown';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import { merge } from 'lodash';
import { withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.update = this.update.bind(this);
    this.submitCredentials = this.submitCredentials.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  submitCredentials(e) {
    e.preventDefault();
    let stateCopy = merge({}, this.state);
    this.state = { username: "", password: "" };
      this.props.login(stateCopy).then(
        () => this.props.hideModal("loginForm")).then(
        () => this.props.router.push('stream')
      );
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
    let _errors;

    if (this.props.errors && Object.keys(this.props.errors).length !== 0) {
      _errors = this.props.errors.responseJSON
    }

    return (
      <div className="confirm-modal">
        { isShowing &&
          <div>
            <div className="modal-backdrop" onClick={ this.cancel } ></div>
            <div className="confirm-modal-content">
              <span className="confirm-modal-message">Login</span>

            <form onSubmit={ this.submitCredentials } >
              <label>Username
                <input className="confirm-modal-input"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}/>
              </label>

              <label>Password
                <input className="confirm-modal-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}/>
              </label>
              { (_errors && _errors.base) ? <div className="modal-error">{ _errors.base[0] }</div>  : <div></div> }

              <div className="buttons-container">
                <input className="submit" value="Submit" type="submit" />
                <div className="cancel" onClick={this.cancel}> Cancel </div>
              </div>
            </form>

            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isShowing: state.modal.loginForm,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  hideModal: (modal_name) => dispatch(hideModal(modal_name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
