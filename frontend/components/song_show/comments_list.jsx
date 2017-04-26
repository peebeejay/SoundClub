import React from 'react';
import CommentsListItem from './comments_list_item.jsx';
import { Link } from 'react-router';

class CommentsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    let _song = this.props.song;

    const comment_list_items = this.props.song.comments.map((comment) => {
      return (<CommentsListItem key={ comment.id } comment={ comment } commenter={ _song.commenters[comment.user_id] }/>)
    })


    return(
      <div className="comments-list">
        <div className="new-comment-form">
            New Comment Form Placeholder
        </div>

        <div className="comments-container">
          <div className="comments-user-info">
            <div className="user-image">
              <img src={ _song.artist.img } />
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
            <div className="follow-button"></div>
          </div>
          <div className="comments-list-items-container">
            <div className="comment-count"><i className="fa fa-comment"></i>&nbsp;&nbsp;{ _song.comments.length } comments</div>
            <div className="comment-list-items"> { comment_list_items } </div>
          </div>

        </div>


      </div>
    )
  }

}

export default CommentsList;
