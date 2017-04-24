import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SessionFormContainer from './sessions/session_form_container';
import Modals from './modals/modals.jsx';
import AudioPlayer from './main_components/audio/audio_player.jsx';
import { Link } from 'react-router';

const App = ({ children }) => {
  return (
    <div>
      <Modals />
      { children }
      <AudioPlayer />
    </div>
  );
};

export default App;

// const modalTypes = {
//   signup: <SignuopComonem />
// }
//
// const Modal = ({modalType}) => {
//   return (
//     <div className='outer-modal'>
//       <div className='inner-modal'>
//         { modalTypes[modalType] }
//       </div>
//     </div>
//   )
// }
//
// const App = ({ children }) => {
//
//   return (
//     <div>
//       <Main>
//         <h1>Welcome to SoundClub</h1>
//         <GreetingContainer />
//         { children }
//         { (1 == 2) && <div>This will get rendered if first thing is true</div> }
//     </Main>
//     </div>
//   );
//
// };
