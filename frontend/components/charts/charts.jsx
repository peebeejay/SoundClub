import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Charts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div>
            Charts Component Placeholder
        </div>
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Charts));
