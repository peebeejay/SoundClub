import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="search-bar-container">
        <form className="header-search">
          <input className="search-bar-input" placeholder="Search" />
         <button className="search-button"><i className="fa fa-search" /></button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
