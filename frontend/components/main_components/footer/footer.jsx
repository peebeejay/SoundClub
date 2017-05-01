import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer">
        <div className="footer-content"></div>
      </footer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = (dispatch, ownProps) => ({ });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
