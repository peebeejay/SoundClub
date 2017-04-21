import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';

class Upload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div className="upload-wrapper">
          <div className="upload-header">Upload to SoundClub</div>
          <div className="upload-buttons">
            <button></button>
          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
