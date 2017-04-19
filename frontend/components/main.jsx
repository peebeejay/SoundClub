import React from 'react';
import Navbar from './main_components/navbar/navbar.jsx';
import FooterContainer from './main_components/footer/footer_container.jsx';

const Main = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      <section className="content">
        { children }
      </section>
      <FooterContainer />
    </div>

  )
}

export default Main;
