import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {

  logout() {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <h1> Welcome {this.props.currentUser.username} </h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return(
        <div>
          <Link to='signup'>Sign Up </Link>
          <Link to='login'>Log In </Link>
        </div>
      );
    }
  }
}

export default Greeting;
