import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.getText = this.getText.bind(this);
    this.state = { username: "", password: "" };
    this.update = this.update.bind(this);
    this.submitCredentials = this.submitCredentials.bind(this);
  }

  submitCredentials() {
    let that = this;
    return () => {
      let x = that;
      this.props.login(this.state);

    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    // let isShowing = true;
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

              <button className="btn" onClick={this.submitCredentials()}>OK</button>
              <button className="btn" >Cancel</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    isShowing: true
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);

// export default TestComponent;

// <div className="confirm-modal">
//   { isShowing &&
//     <div>
//       <div className="modal-backdrop"></div>
//       <div className="confirm-modal-content">
//         <span className="confirm-modal-message">{message}</span>
//         <input className="confirm-modal-input" type="text" ref={(_ref) => this.confirmInput = _ref}/>
//         <button className="btn" onClick={() => this.getTextAndConfirm()}>OK</button>
//         <button className="btn" onClick={() => onCancel()}>Cancel</button>
//       </div>
//     </div>
//   }
// </div>
