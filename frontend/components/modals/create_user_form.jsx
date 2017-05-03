import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions'; //*****
import { showModal, hideModal } from '../../actions/modal_actions';
import { merge } from 'lodash';
import { withRouter } from 'react-router';

class CreateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", display_name: "", location: "", password: "" };
    this.update = this.update.bind(this);
    this.submitCredentials = this.submitCredentials.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  submitCredentials() {
    return () => {
      if (this.state.username !== "" && this.state.display_name !== "" && this.state.password !== "") {
        let stateCopy = merge({}, this.state);
        // this.state = { username: "", display_name: "", location: "", password: "" };
        this.props.signUp(stateCopy).then(
          () => this.setState({ username: "", display_name: "", location: "", password: "" })).then(
          () => this.props.hideModal("createUserForm")).then(
          () => this.props.router.push('/stream'));
      }
    };
  }

  cancel() {
    this.state = { username: "", display_name: "", location: "", password: "" };
    this.props.hideModal("createUserForm");
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    let _errors;
    let { isShowing } = this.props;
    // debugger

    if (this.props.errors && Object.keys(this.props.errors).length !== 0)
      _errors = this.props.errors.responseJSON

    // debugger
    return (
      <div className="confirm-modal">
        { isShowing &&
          <div>
            <div className="modal-backdrop" onClick={ this.cancel } ></div>
            <div className="confirm-modal-content">
              <span className="confirm-modal-message">Create account</span>

              <div className="modal-field">
                <label>Username*
                  <input className="confirm-modal-input"
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}/>
                </label>
                { (_errors && _errors.username) ? <div className="modal-error">Username has already been chosen</div>  : <div></div>}
              </div>

              <div className="modal-field">
                <label>Display Name*
                    <input className="confirm-modal-input"
                           type="text"
                           value={this.state.display_name}
                           onChange={this.update('display_name')}/>
                </label>
                { (_errors && _errors.display_name) ? <div className="modal-error">Display Name can't be blank</div>  : <div></div>}
              </div>

              <div className="modal-field">
                <label>Location
                  <input className="confirm-modal-input"
                    type="text"
                    value={this.state.location}
                    onChange={this.update('location')}/>
                </label>
              </div>

              <div className="modal-field">
                <label>Password*
                  <input className="confirm-modal-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}/>
                </label>
                { (_errors && _errors.password) ? <div className="modal-error">Password must be at least 6 characters</div>  : <div></div>}
              </div>

              <div className="buttons-container">
                <button className="cancel" onClick={ this.cancel }>Cancel</button>
                <button className="submit" onClick={this.submitCredentials()}>Submit</button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    isShowing: state.modal.createUserForm,
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signUp: (user) => dispatch(signUp(user)),
  hideModal: (modal_name) => dispatch(hideModal(modal_name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateUserForm));
