import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div>
            Discover Component Placeholder
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
)(withRouter(Discover));
