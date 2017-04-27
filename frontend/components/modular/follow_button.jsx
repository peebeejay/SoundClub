import React from 'react';
import { connect } from 'react-redux';
import { createFollow, removeFollow } from '../../actions/follow_actions.js';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { disabled: false }
  }

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({ follower_id: this.props.currentUser.id, followee_id: this.props.artistId}).then(
      () => this.enableButton());
    this.setState({ disabled: true })
  }

  handleUnfollow(e) {
    e.preventDefault();
    this.props.removeFollow(this.props.currentUser.followees[this.props.artistId].id).then(
      () => this.enableButton());
    this.setState({ disabled: true })
  }

  enableButton() {
    this.setState({ disabled: false})
  }

  render() {
    if ( !this.props.currentUser )
      return( <div></div>);
      
    // True if currentUser IS a follower ; false if currentUser IS NOT a follower
    let _currentUserFollows = false;
    if (this.props.currentUser.followees &&
        Object.keys(this.props.currentUser.followees).includes(this.props.artistId.toString())) {
          _currentUserFollows = true;
      }

    return(
      <div className="follow-button-content">
        { (_currentUserFollows) ?
          <button className="follow-button following"
                  onClick={ this.handleUnfollow }
                  disabled={ this.state.disabled } >
                  Following</button> :

          <button className="follow-button not-following"
                  onClick={ this.handleFollow }
                  disabled={ this.state.disabled } >
                  Follow</button>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  removeFollow: (follow) => dispatch(removeFollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton)
