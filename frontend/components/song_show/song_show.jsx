import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSong, removeSongs } from '../../actions/song_actions.js';
import { createComment, removeComment } from '../../actions/comment_actions.js';
import Navbar from '../main_components/navbar/navbar.jsx';
import FooterContainer from '../main_components/footer/footer_container.jsx';
import SongListItem from '../modular/song_list_item.jsx';
import CommentsList from './comments_list.jsx';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { receivedSong: false };
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
    if (this.props.params.id !== newProps.params.id) {
      this.props.fetchSong(newProps.params.id);
    }
  }

  render() {
    let _song = {};
    let _currentUser = this.props.currentUser;

    if (Object.keys(this.props.songs).includes(this.props.params.id))
      _song = this.props.songs[this.props.params.id];

    return(
      <div className="main">
        { (this.props.router.location.pathname !== '/') && <Navbar /> }
        <div className="content-wrapper-artist">
          <div className="content-artist">
              <div className="artist-header">
                <div className="artist-header-content">
                  { _song.id && <SongListItem song={_song} /> }

                </div>
              </div>

          </div>
          { _song.id && <CommentsList song={_song}
                                      currentUser={ _currentUser }
                                      createComment={ this.props.createComment }
                                      removeComment={ this.props.removeComment }/>  }

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
    removeComment: (id) => dispatch(removeComment(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SongShow));
