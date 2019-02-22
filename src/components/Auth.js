import React, { Component, Fragment } from "react";
import "../styles/Auth.css";

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
      <div className="Auth">
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input onChange={this.handleChange} value={this.state.username} />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Auth;
