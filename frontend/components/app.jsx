import React from 'react';
import ReactDOM from 'react-dom';
import GreetingContainer from './greetings/greeting_container';
import SessionFormContainer from './sessions/session_form_container';
import { Link } from 'react-router';

const App = ({ children }) => {
  // debugger
  return (
    <div>
      <h1>Welcome to SoundClub</h1>&nbsp;
      <Link to={"/"}>Home</Link>&nbsp;
      <Link to={"/stream"}>Stream</Link>&nbsp;
      <Link to={"/discover"}>Discover</Link>&nbsp;
      <Link to={"/upload"}>Upload</Link>&nbsp;

      <GreetingContainer />
      { children }
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
