import React from 'react';

class DeleteSongButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteSong(this.props.song.id).then(
      () => this.props.router.push('/stream')
    )
  }

  render() {
    return(
      <div className="delete-song-button-container">
        <button className="delete-song-button"
                onClick={ this.handleClick }>
                Delete Song
        </button>
      </div>
    );
  }
}

export default DeleteSongButton;
