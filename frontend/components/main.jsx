import React from 'react';
import Navbar from './main_components/navbar/navbar.jsx';
import FooterContainer from './main_components/footer/footer_container.jsx';
import { connect } from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children, currentUser } = this.props;
    return (
      <div className="main">
        <Navbar />
        <div className="content-wrapper">
          <div className="content">
            { children }
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}
// { (currentUser !== null) && <Navbar /> }

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    ownProps: ownProps
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
