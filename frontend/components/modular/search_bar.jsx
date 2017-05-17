import React from 'react';
import { searchSongs } from '../../actions/song_actions.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = { search: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    if ( this.state.search.length > 0 ) {
      this.props.searchSongs(this.state.search).then(
        () => this.props.router.push('/search')
      )
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return(
      <div className="search-bar-container">
        <form className="header-search" onSubmit={ this.handleSubmit }>
          <input className="search-bar-input"
                 placeholder="Search"
                 onChange={ this.update('search') } />
         <div className="search-button" onClick={ this.handleSubmit }>
           <i className="fa fa-search" />
         </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ })

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    searchSongs: (search) => dispatch(searchSongs(search))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
