import React from 'react';
import { Link } from 'react-router';
import PlayButton from './play_button.jsx';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="song-list-item-container">
        <div className="song-list-image-container">
          <Link to={`songs/${this.props.song.id}`}>
            <img className="song-list-image" src={this.props.song.img} />
          </Link>

        </div>
        <div className="music-content">
          <div className="play-info">
            <div className="play-button-container">
              <PlayButton song={this.props.song} type={"song-list"} />
            </div>

            <div className="artist-title">

              <div className="artist">
                <Link to={`artists/${this.props.song.artist.id}`}>
                  {this.props.song.artist.display_name}
                </Link>
              </div>

              <div className="title">
                <Link to={`/songs/${this.props.song.id}`} >
                  {this.props.song.title}
                </Link>
              </div>
            </div>

            <div className="date-container">
              <div className="date">{(this.props.song.created_at).slice(0, 10)}</div>
            </div>

          </div>
          <div className="waveform"></div>
          <div className="comments-likes"></div>
        </div>
      </div>
    );
  }
}

export default SongListItem;
