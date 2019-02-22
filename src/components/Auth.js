import React, { Component, Fragment } from "react";

class Auth extends Component {
  state = {
    username: ""
  };

  handleChange = event => {
    const username = event.target.value;
    this.setState({ username });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login } = this.props;
    const { username } = this.state;
    login(username);
  };

  render() {
    if (this.props.user) {
      return <Fragment>{this.props.children}</Fragment>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Username</label>
          <input onChange={this.handleChange} value={this.state.username} />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Auth;
