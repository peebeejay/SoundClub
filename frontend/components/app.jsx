import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SessionFormContainer from './sessions/session_form_container';
import Modals from './modals/modals.jsx';
import AudioPlayer from './main_components/audio/audio_player.jsx';
import AudioPlayerNew from './main_components/audio/audio_player_new.jsx';
import { Link } from 'react-router';

const App = ({ children }) => {
  return (
    <div>
      <Modals />
      { children }
      <AudioPlayerNew />
    </div>
  );
};

export default App;
