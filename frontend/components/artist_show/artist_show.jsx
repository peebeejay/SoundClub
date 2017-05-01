import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import Navbar from '../main_components/navbar/navbar.jsx';
import Footer from '../main_components/footer/footer.jsx';
import SongList from '../modular/song_list.jsx';
import FollowButton from '../modular/follow_button.jsx';
import { fetchUser, removeUser } from '../../actions/user_actions.js';
import { removeSongs, fetchSongsByUser } from '../../actions/song_actions.js';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.removeUser();
    this.props.removeSongs();
  }

  componentWillMount() {
    this.props.removeSongs();
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id).then(
      () => this.props.fetchSongsByUser(this.props.params.id)
    )
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.fetchUser(newProps.params.id);
    }
  }

  render() {
    let _user = {};
    let _img;
    if (Object.keys(this.props.user).length > 0)
      _user = this.props.user;

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

              <div className="left-tabs-nav flex-row">
                <ul className="left-tabs-list">
                  <li className="active-li"><Link activeClassName="active" >Songs</Link></li>
                </ul>
                <div className="follow-button-container">
                  { (_user.id && this.props.currentUser) && <FollowButton artistId={ _user.id } type={"artist"}/> }
                </div>
              </div>

              <div className="song-list">
                { this.props.songs && <SongList songs={ this.props.songs } /> }
              </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    songs: Object.keys(state.songs).map((id) => {
      return state.songs[id];
    }),
    user: state.user,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
    removeUser: () => dispatch(removeUser()),
    removeSongs: () => dispatch(removeSongs()),
    fetchSongsByUser: (user_id) => dispatch(fetchSongsByUser(user_id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArtistShow));
