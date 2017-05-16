import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer">
        <div className="footer-content">
          <ul className="flex-row">
            <li>Created by Jay Puntham-Baker - </li>
            <li><a target="_blank" href="https://github.com/vdersar1/soundclub">GitHub - </a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/jay-puntham-baker-ba573a4/">LinkedIn - </a></li>
            <li><a target="_blank" href="https://soundcloud.com">Original SoundCloud</a></li>
          </ul>


        </div>
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
