import React from 'react';
import { Link } from 'react-router';
import { FormattedRelative } from 'react-intl';

class CommentsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = { hover: false }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.removeComment(this.props.comment.id);
  }

  handleMouseEnter() {
    this.setState( { hover: true });
  }

  handleMouseLeave() {
    this.setState( { hover: false });
  }

  render() {
    let _comment = this.props.comment;
    let _commenter = this.props.commenter;
    let _currentUser = this.props.currentUser

    return(
      <div className="comment-list-item-content" onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave } >
        <div className="comment-list-item-img">
          <Link to={`artists/${ _commenter.id }`}><img src={ _commenter.img } /></Link>
        </div>

        <div className="another-content-container">
          <div className="name-time-body-container">
            <div className="comment-list-item-name">
              <span className="comment-item-name"><Link to={`artists/${ _commenter.id }`}>{ _commenter.display_name }</Link></span>
            </div>
            <div className="relative-time-container">
              <div className="relative-time">
                <FormattedRelative value={ _comment.created_at } />
                <div className="delete-button">
                  { (_currentUser && (_currentUser.id == _commenter.id)) &&
                    <button onClick={ this.handleClick } className={ (this.state.hover) ? "" : "hidden" }>
                      <i className="fa fa-trash-o" />
                    </button>
                    }
                </div>
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
