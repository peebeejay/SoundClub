import React from 'react';
import Main from '../main.jsx';
import LeftTabsNavigation from '../modular/left_tabs_navigation.jsx';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Main>
        <div className={"content-left-wrapper"}>
          <div className={"content-left"}>
            <LeftTabsNavigation />

          </div>
        </div>
        <div className={"content-right-wrapper"}>
          <div className={"content-right"}>
            Right Content

          </div>
        </div>
      </Main>
    );
  }
}

export default Stream;
