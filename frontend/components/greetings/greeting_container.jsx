import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting.jsx';
import { receiveCurrentUser, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
