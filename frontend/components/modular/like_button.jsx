import React from 'react';
import { connect } from 'react-redux'
import { createLike, removeLike } from '../../actions/like_actions.js';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { disabled: false }
  }

  handleClick() {
    console.log("handling click");
    if ( this.props.song.likes ) {
      console.log("handle removing like");
      this.props.removeLike(this.props.song.id).then(
        () => this.setState({disabled: true }));
      this.setState({ disabled: false})
    }

    else if ( !this.props.song.likes ) {
      console.log("adding a like");
      this.props.createLike(this.props.song.id).then(
        () => this.setState({ disabled: false}));
      this.setState({ disabled: true })

    }
  }

  render() {
    let _liked = this.props.song.likes;
    let _type = this.props.type;

    return(
      <div>
        { (this.props.currentUser) && <div className="like-button-inner-container">
          <button className={ _liked ? `like-button-liked-${ _type }` : `like-button-${ _type }`}
                  onClick={ this.handleClick }>

            <i className="fa fa-heart" />
          </button>
        </div> }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createLike: (song_id) => dispatch(createLike(song_id)),
  removeLike: (song_id) => dispatch(removeLike(song_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
