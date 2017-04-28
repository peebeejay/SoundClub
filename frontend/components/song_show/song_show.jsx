import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSong, removeSongs, deleteSong } from '../../actions/song_actions.js';
import { createComment, removeComment } from '../../actions/comment_actions.js';
import Navbar from '../main_components/navbar/navbar.jsx';
import FooterContainer from '../main_components/footer/footer_container.jsx';
import SongDetails from './song_details.jsx';
import CommentsList from './comments_list.jsx';
import DeleteSongButton from './delete_song_button.jsx';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { receivedSong: false, hover: false };
  }

  componentWillUnmount() {
    this.props.removeSongs();
  }

  componentWillMount() {
    this.props.removeSongs();
  }

  componentDidMount() {
    this.props.fetchSong(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id)
      this.props.fetchSong(newProps.params.id);
  }

  render() {
    let _song = {};
    let _currentUser = this.props.currentUser;

    if (Object.keys(this.props.songs).includes(this.props.params.id))
      _song = this.props.songs[this.props.params.id];


    return(
      <div className="main">
        { (this.props.router.location.pathname !== '/') && <Navbar /> }
        <div className="content-wrapper-song">
          <div className="content-song">
              <div className="song-header">
                <div className="song-header-content">
                  { _song.id && <SongDetails song={_song} /> }

                </div>
              </div>

          </div>
          <div className="flex-row">
            { _song.id && <CommentsList song={_song}
            currentUser={ _currentUser }
            createComment={ this.props.createComment }
            removeComment={ this.props.removeComment }/>
            }

            { (_song.id && _currentUser && (_song.artist.id === _currentUser.id)) &&
            <DeleteSongButton song={ _song }
                              deleteSong={ this.props.deleteSong }
                              router={ this.props.router }/>
            }

          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    songs: state.songs,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchSong: (id) => dispatch(fetchSong(id)),
    removeSongs: () => dispatch(removeSongs()),
    createComment: (comment) => dispatch(createComment(comment)),
    removeComment: (id) => dispatch(removeComment(id)),
    deleteSong: (id) => dispatch(deleteSong(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SongShow));
