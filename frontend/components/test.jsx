import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import { showModal, hideModal } from '../actions/modal_actions';
import { merge } from 'lodash';
import Main from './main';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    let { isShowing } = this.props;
    return (
      <Main>
        <a href="#" className="round-button">
          <i className="fa fa-play fa-2x"></i>
        </a>
      </Main>
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
)(TestComponent);
