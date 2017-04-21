import React from 'react';
import { Link } from 'react-router';

class DiscoverSongListItem extends React.Component {
  constructor(props) {
    super(props);
  }

// NOTE:
// Eventually, the anchor link .round-button will be required to dispatch an action to play a respective song.

  render() {
    return (
      <figure className={"discover-item-img"}>
        <div className="discover-img-container">
          <img src={`http:${this.props.song.img}`} />
          <div className="discover-img-container-middle">
            <a className="round-button">
              <i className="fa fa-play fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="discover-item-title"><Link to={`songs/${this.props.song.id}`}>{this.props.song.title}</Link></div>
        <div className="discover-item-artist"><Link to={`artists/${this.props.song.artist.id}`}>{this.props.song.artist.username}</Link></div>



      </figure>
    );
  }
}

export default DiscoverSongListItem;
