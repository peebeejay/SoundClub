import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signUpForm } from '../../actions/session_actions.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false, audioFile: null,
                   audioUrl: null, imageFile: null,
                   imageUrl: null, username: '',
                   displayName: '', location: '',
                   password: '', disableSubmit: false
                 }

  this.uploadImage = this.uploadImage.bind(this);
  this._update = this._update.bind(this);
  this._submit = this._submit.bind(this);
  }

  uploadImage(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      console.log("image load end");
      this.setState({
        imageFile:file,
        imageUrl: fileReader.result
      })
    }

    if (file)
      fileReader.readAsDataURL(file);
  }

  _update(field) {
    return (e) => this.setState({ [field] : e.target.value })
  }

  _cancel() {
    this.props.router.push('/');
  }

  _submit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[username]", this.state.username)
    formData.append("user[display_name]", this.state.displayName)
    formData.append("user[location]", this.state.location)
    formData.append("user[password]", this.state.password)
    formData.append("user[img]", this.state.imageFile)

    this.setState({ disableSubmit: true })

    this.props.signUpForm(formData).then(
      ({ song }) => {
        this.props.router.push('/stream');
      }
    )
  }

  render() {
    let image
    if (this.state.imageUrl) {
      image = <img className="signup-img-preview" src={this.state.imageUrl} />
      console.log("rendering image object");
    } else {
      image = <img className="signup-img-preview" />
    }

    return(
      <Main>
        <div className="signup-wrapper">
          <div className="signup">
            <div className="signup-header">Sign Up for SoundClub</div>
            <form>
              <div className="flex-row form-container">

                <label>
                  {image}
                  <div className="signup-select-img">
                    <i className="fa fa-camera" />
                    <span>&nbsp;Upload Image</span>
                  </div>
                  <input className="hidden" type="file" onChange={ this.uploadImage } />
                </label>

                <div className="flex-column form-container">
                  <label> Username* </label>
                  <input id="username"
                    type="text"
                    name="username"
                    value={ this.state.username }
                    onChange={this._update("username")}/>


                  <label>Display name*</label>
                  <input id="displayName"
                         type="text"
                         name="displayName"
                         value={ this.state.displayName }
                         onChange={this._update("displayName")}/>

                  <label>Location</label>
                  <input id="location"
                        type="text"
                        name="location"
                        value={ this.state.location }
                        onChange={this._update("location")}/>

                  <label>Password*</label>
                  <input id="password"
                         type="password"
                         name="password"
                         value={ this.state.password }
                         onChange={this._update("password")}/>

                   <div className="submit-buttons">
                    <button className={this.state.disableSubmit ? "disable" : "cancel" }
                            disabled={this.state.disableSubmit}
                            onClick={this._cancel}>Cancel</button>

                    <button className={this.state.disableSubmit ? "disable" : "submit" }
                            disabled={this.state.disableSubmit}
                            onClick={this._submit}>Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    signUpForm: (user) => dispatch(signUpForm(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup));
