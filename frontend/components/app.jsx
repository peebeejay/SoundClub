import React from 'react';
import ReactDOM from 'react-dom';
import GreetingContainer from './greetings/greeting_container';
import SessionFormContainer from './sessions/session_form_container';


const App = ({ children }) => {

  return (
    <div>
      <h1>Welcome to SoundClub</h1>
      <GreetingContainer />
      { children }
    </div>
  );

};

export default App;
