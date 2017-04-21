import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div>
          ArtistShow Component Placeholder for Artist.id: {this.props.params.id}
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
)(withRouter(ArtistShow));
