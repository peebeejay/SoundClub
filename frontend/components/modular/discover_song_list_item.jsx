import React from 'react';
import { Link } from 'react-router';
import PlayButton from './play_button.jsx';
import LikeButton from './like_button.jsx';

class DiscoverSongListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className={`discover-item-img ${ this.props.type } `}>
        <div className="discover-img-container">
          <img src={`http:${this.props.song.img}`} className={ this.props.type }/>

          <div className="discover-img-container-like">
            { this.props.currentUser &&
              <LikeButton song={ this.props.song }
                type={ "discover-list" }/>
            }
          </div>

          <div className="discover-img-container-middle">
            <PlayButton song={this.props.song} type={"discover-list"} />

          </div>
        </div>
        <div className="discover-item-title"><Link to={`songs/${this.props.song.id}`}>{this.props.song.title}</Link></div>
        <div className="discover-item-artist"><Link to={`artists/${this.props.song.artist.id}`}>{this.props.song.artist.username}</Link></div>
      </figure>
    );
  }
}

export default DiscoverSongListItem;
