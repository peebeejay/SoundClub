import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          username: "",
          password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      () => this.props.router.push('/'));
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={ this.handleSubmit }>
          <label>Username
            <input type="text" name="username" onChange={ this.handleChange } value={ this.state.username }/>
          </label>

          <label>Password
            <input type="text" name="password" onChange={ this.handleChange } value={ this.state.password }/>
          </label>

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default SessionForm;
