import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Navbar from '../main_components/navbar/navbar.jsx';
import FooterContainer from '../main_components/footer/footer_container.jsx';
import SongList from '../modular/song_list.jsx';
import { fetchUser, removeUser } from '../../actions/user_actions.js';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.removeUser();
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.fetchUser(newProps.params.id);
    }
    // debugger
  }

  render() {
    let _user = {};
    let _img;
    if (Object.keys(this.props.user).length > 0) {
      _user = this.props.user
      // debugger
    }
    // debugger

    return(
      <div className="main">
        { (this.props.router.location.pathname !== '/') && <Navbar /> }
        <div className="content-wrapper-artist">
          <div className="content-artist">
              <div className="artist-header">
                <div className="artist-header-content">

                  <div className="profile-image">
                    <img src={ _user.img }/>
                  </div>

                  <div className="user-details">
                    { _user.username && <div className="username"><span>{_user.username}</span></div> }
                    { _user.display_name && <div className="display-name"><span>{_user.display_name}</span></div> }
                    { _user.location && <div className="location"><span>{_user.location}</span></div> }
                  </div>
                </div>
              </div>


              <div className="song-list">
                { _user.songs && <SongList songs={_user.songs} /> }
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
    fetchUser: (id) => dispatch(fetchUser(id)),
    removeUser: () => dispatch(removeUser())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArtistShow));
