import React from 'react';
import CommentsListItem from './comments_list_item.jsx';
import CommentsListForm from './comments_list_form.jsx';
import { Link } from 'react-router';
import FollowButton from '../modular/follow_button.jsx';

class CommentsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let _song = this.props.song;
    let _comments_list_items = "";
    let _comments_length = 0;
    let _currentUser = this.props.currentUser;

    if ( _song.comments && _song.comments.length > 0 ) {
      _comments_length = _song.comments.length;
      _comments_list_items = _song.comments.map((comment) => {
        return (<CommentsListItem key={ comment.id }
                                  comment={ comment }deleteComment
                                  commenter={ _song.commenters[comment.user_id] }
                                  removeComment={ this.props.removeComment }
                                  currentUser={ _currentUser } />)
      })
    }

    return(
      <div className="comments-list">
        <div className="new-comment-form-container">
          { _currentUser && <CommentsListForm currentUser={ _currentUser }
                                              song={ _song }
                                              createComment={ this.props.createComment } />}
        </div>

        <div className="comments-container">
          <div className="comments-user-info">
            <div className="user-image">
              <Link to={ `artists/${ _song.artist.id }` }><img src={ _song.artist.img } /></Link>
            </div>
            <span className="user-name"><Link to={`artists/${_song.artist.id}`}>{ _song.artist.display_name }</Link></span>
            <div className="user-stats">
              <div className="user-followers">
                <i className="fa fa-male"> </i> 0
              </div>
              <div className="user-songs-count">
                <i className="fa fa-headphones"></i>{ _song.artist.song_count }
              </div>
            </div>
            <div className="follow-button-container">
              <FollowButton artistId={ _song.artist.id }/>
            </div>
          </div>
          <div className="comments-list-items-container">
            <div className="comment-count"><i className="fa fa-comment"></i>&nbsp;&nbsp;{ _comments_length } comments</div>
            <div className="comment-list-items"> { _comments_list_items } </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentsList;
