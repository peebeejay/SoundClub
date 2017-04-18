import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login, signUp } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser,
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (user) => dispatch(processFormHelper(ownProps.location.pathname)(user)) //CURRY
  });
};

const processFormHelper = (formType) => {
  if (formType === "/login") {
    return login;
  } else if (formType === "/signup") {
    return signUp;
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
