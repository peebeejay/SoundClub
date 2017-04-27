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
    this.props.createFollow({ follower_id: currentUser.id, followee_id: this.props.artistId}).then(
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
    // True if currentUser IS a follower ; false if currentUser IS NOT a follower
    let _currentUserFollows = this.props.currentUser.follows.includes(this.props.artistId)
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
