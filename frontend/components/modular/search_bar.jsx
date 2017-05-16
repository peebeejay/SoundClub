import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className="search-bar-container">
        <form className="header-search" onSubmit={ this.handleSubmit }>
          <input className="search-bar-input" placeholder="Search" />
         <div className="search-button" onClick={ this.handleSubmit }>
           <i className="fa fa-search" />
         </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
