import React from 'react';

class CommentsListForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = { body: "" }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.body.length > 0) {
      this.props.createComment({ song_id: this.props.song.id, body: this.state.body }).then(
        () => this.setState({ body: "" })
      );
    }
  }

  update(e) {
    this.setState({ body: e.target.value })
  }

  render() {
    let _currentUser = this.props.currentUser;

    return(
      <div className="new-comment-form">
        <div className="new-comment-form-img">
          <img src={ _currentUser.img } />
        </div>

        <div className="input-container">
          <form className="input-form" onSubmit={ this.onSubmit } >
            <input type="text" placeholder="Write a comment" value={ this.state.body } onChange={ this.update } />
          </form>
        </div>

      </div>
    )
  }
}

export default CommentsListForm;
