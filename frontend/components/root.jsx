import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import TestComponent from './test.jsx';
import StreamContainer from './stream/stream_container.jsx';
import Discover from './discover/discover.jsx';
import Upload from './upload/upload.jsx';
import Splash from './splash/splash.jsx';
import Charts from './charts/charts.jsx';
import SongShow from './song_show/song_show.jsx';
import ArtistShow from './artist_show/artist_show.jsx';
import Signup from './sessions/signup.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectIfLoggedOut = this._redirectIfLoggedOut.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace('/stream');
    }
  }

  _redirectIfLoggedOut(nextState, replace) {
    if (!this.props.store.getState().session.currentUser) {
      replace('/signup');
    }
  }

  render() {
    return(
      <Provider store={ this.props.store }>
        <Router history={ hashHistory }>
          <Route path="/" component={ App } >
            <IndexRoute component={ Splash } onEnter={this._redirectIfLoggedIn}/>
            <Route path="/stream" component= { StreamContainer } onEnter={this._redirectIfLoggedOut}/>
            <Route path="/discover" component= { Discover } onEnter={this._redirectIfLoggedOut}/>
            <Route path="/charts" component= { Charts } />
            <Route path="/upload" component= { Upload } onEnter={this._redirectIfLoggedOut}/>
            <Route path="/test" component= { TestComponent } />
            <Route path="/songs/:id" component= { SongShow } />
            <Route path="/artists/:id" component= { ArtistShow } />
            <Route path="/signup" component= { Signup } />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
