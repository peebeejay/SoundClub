import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSong, removeSongs } from '../../actions/song_actions.js';
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

    if (Object.keys(this.props.songs).includes(this.props.params.id)) {
      _song = this.props.songs[this.props.params.id];
    }

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
          { _song.id && <CommentsList song={_song} /> }


        </div>
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    songs: state.songs
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchSong: (id) => dispatch(fetchSong(id)),
    removeSongs: () => dispatch(removeSongs())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SongShow));

// { _user.username && <div className="username"><span>{_user.username}</span></div> }
// { _user.display_name && <div className="display-name"><span>{_user.display_name}</span></div> }
// { _user.location && <div className="location"><span>{_user.location}</span></div> }


// audio
// :
// "//s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/001/original/open-uri20170424-2781-ji89lm?1493050157"
// created_at
// :
// "2017-04-24T16:09:17.243Z"
// id
// :
// 1
// img
// :
// "//s3.amazonaws.com/soundclub-assets-dev/songs/imgs/000/000/001/original/open-uri20170424-2781-f613b9?1493050157"
// title
// :
// "Etude 01"
// updated_at
// :
// "2017-04-24T16:09:17.243Z"
// user_id
// :
2
