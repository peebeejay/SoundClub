import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar.jsx';

const mapStateToProps = (state, ownProps) => {
  return({
    state:state,
    ownProps: ownProps
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
