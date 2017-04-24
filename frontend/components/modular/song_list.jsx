import React from 'react';
import SongListItem from './song_list_item.jsx'

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let song_items;
    if (this.props.songs) {
      // debugger

      song_items = this.props.songs.map((song) => {
        return (<SongListItem key={song.id} song={song} />);
      });
    } else {
      song_items = ""
    }

    return(

      <div>
        {song_items}
      </div>
    );
  }
}

export default SongList;
