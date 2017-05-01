import React from 'react';
import { Link } from 'react-router';
import PlayButton from '../modular/play_button.jsx';
import { FormattedRelative } from 'react-intl';

class SongDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="song-details-item-container">

        <div className="music-content">
          <div className="play-info">
            <div className="play-button-container">
              <PlayButton song={this.props.song} type={"song-details"} />
            </div>

            <div className="artist-title">

              <div className="artist">
                <Link to={`artists/${this.props.song.artist.id}`}>
                  <span>{this.props.song.artist.display_name}</span>
                </Link>
              </div>

              <div className="title">
                <span>{this.props.song.title}</span>
              </div>
            </div>

            <div className="date-container">
              <div className="date"><FormattedRelative value={this.props.song.created_at} /></div>
            </div>

          </div>
          <div className="waveform"></div>
          <div className="comments-likes flex-row">
            <div className="likes-count"></div>
            <div className="plays-count"></div>
          </div>
        </div>
        <div className="song-details-image-container">
            <img className="song-details-image" src={this.props.song.img} />
        </div>
      </div>
    )
  }
}

export default SongDetails;
