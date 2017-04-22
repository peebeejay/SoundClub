import React from 'react';
import { connect } from 'react-redux';
import { merge } from 'lodash';
import { showModal, hideModal } from '../../actions/modal_actions';


class UploadForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div></div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    isShowing: state.modal.uploadForm
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideModal: (modal_name) => dispatch(hideModal(modal_name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
