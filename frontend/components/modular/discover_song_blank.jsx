import React from 'react';
import { Link } from 'react-router';

class DiscoverSongBlank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className={"discover-item-img-empty"}>
        <img />
        <div className="discover-item-title blank">{"| "}</div>
        <div className="discover-item-artist blank">{"| "}</div>
      </figure>
    );
  }
}

export default DiscoverSongBlank;

//background: transparent image-url("")
