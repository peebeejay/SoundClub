import React from 'react';
import NavbarContainer from './main_components/navbar/navbar_container.jsx';
import FooterContainer from './main_components/footer/footer_container.jsx';

const Main = ({ children }) => {
  return (
    <div className="main">
      <NavbarContainer />
      <section className="content">
        { children }
      </section>
      <FooterContainer />
    </div>

  )
}

export default Main;
