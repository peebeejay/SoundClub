import React from 'react';
import { Link } from 'react-router';
import { FormattedRelative } from 'react-intl';

class CommentsListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _comment = this.props.comment;
    let _commenter = this.props.commenter;
    // debugger
    return(
      <div className="comment-list-item-content">
        <div className="comment-list-item-img">
          <img src={ _commenter.img } />
        </div>

        <div className="another-content-container">
          <div className="name-time-body-container">
            <div className="comment-list-item-name">
              <span className="comment-item-name"><Link to={`artists/${ _commenter.id }`}>{ _commenter.display_name }</Link></span>
            </div>

            <div className="relative-time-container">
              <div className="relative-time">
                <FormattedRelative value={ _comment.created_at } />
              </div>
            </div>
          </div>


          <div className="comment-list-item-body">{ _comment.body }</div>
        </div>
      </div>
    )
  }



}

export default CommentsListItem;
