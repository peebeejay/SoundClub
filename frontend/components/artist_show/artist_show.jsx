import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions.js';
import Navbar from '../main_components/navbar/navbar.jsx';
import FooterContainer from '../main_components/footer/footer_container.jsx';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id)
  }

  render() {
    let _user = {};
    if (this.props.user) {
      _user = this.props.user
    }

    return(
      <div className="main">
        { (this.props.router.location.pathname !== '/') && <Navbar /> }
        <div className="content-wrapper-artist">
          <div className="content-artist">
              <div className="artist-header">
                <div className="artist-header-content">
                  <div className="profile-image">
                    <img />
                  </div>

                  <div className="user-details">
                    { _user.username && <div className="username"><span>{_user.username}</span></div> }
                    { _user.display_name && <div className="display-name"><span>{_user.display_name}</span></div> }
                    { _user.location && <div className="location"><span>{_user.location}</span></div> }
                  </div>

                </div>

              </div>

          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.user
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArtistShow));
