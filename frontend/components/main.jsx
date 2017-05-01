import React from 'react';
import Navbar from './main_components/navbar/navbar.jsx';
import Footer from './main_components/footer/footer.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children, currentUser } = this.props;
    return (
      <div className="main">
        { (this.props.router.location.pathname !== '/') && <Navbar /> }
        <div className="content-wrapper">
          <div className="content">
            { children }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

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
)(withRouter(Main));
