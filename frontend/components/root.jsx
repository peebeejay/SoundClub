import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import TestComponent from './test.jsx';
import StreamContainer from './stream/stream_container.jsx';
import DiscoverContainer from './discover/discover_container.jsx';
import UploadContainer from './upload/upload_container.jsx';
import Splash from './splash/splash.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace('/stream');
    }
  }

  render() {
    return(
      <Provider store={ this.props.store }>
        <Router history={ hashHistory }>
          <Route path="/" component={ App } >
            <IndexRoute component={ Splash } onEnter={this._redirectIfLoggedIn}/>
            <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
            <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
            <Route path="/stream" component= { StreamContainer } />
            <Route path="/discover" component= { DiscoverContainer } />
            <Route path="/upload" component= { UploadContainer } />
            <Route path="/test" component= { TestComponent } />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
