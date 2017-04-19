import React from 'react';
import { Link, withRouter } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedInUser = this.loggedInUser.bind(this);
  }

  //temp method
  loggedInUser() {
    if (this.props.state.session.currentUser) {
      return (<li><Link to={"/"}>{this.props.state.session.currentUser.username}</Link></li>);
    } else {
      return "";
    }
  }

  render() {
    return(

      <section className="navbar">
        <header className="navbar-content">
          <ul>
            <li><Link className="logo-temp" to={"/"}>SoundClub</Link></li>
            <li><Link className="nav-home" activeClassName="active" to={"/stream"}>Home</Link></li>
            <li><Link className="nav-discover" activeClassName="active" to={"/discover"}>Discover</Link></li>
          </ul>
          <ul>
            <li><Link to={"/upload"} activeClassName="active-upload">Upload</Link></li>
            {this.loggedInUser()}
            <li><Link to={"/"}>Sign Out</Link></li>
          </ul>
        </header>
      </section>
    );
  }
}

export default withRouter(Navbar);
