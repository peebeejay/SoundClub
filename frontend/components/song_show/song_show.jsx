import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return(
      <Main>
        <div>
          SongShow Component Placeholder for Song.id: {this.props.params.id}
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
)(withRouter(SongShow));
