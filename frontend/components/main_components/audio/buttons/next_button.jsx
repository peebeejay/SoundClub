import React from 'react';

class NextButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button className="ap__controls ap__controls--next">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             fill="#333"
             width="24"
             height="24"
             viewBox="0 0 24 24">
          <path d="M15.984 6h2.016v12h-2.016v-12zM6 18v-12l8.484 6z"></path>
        </svg>
      </button>
    );
  }
}

export default NextButton;
