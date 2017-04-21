import React from 'react';
import { Link } from 'react-router';

class DiscoverSongListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className={"discover-item-img"}>
        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=173×173&w=173&h=173" />

      </figure>
    )
  }
}

export default DiscoverSongListItem;
