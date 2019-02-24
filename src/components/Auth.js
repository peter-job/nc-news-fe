import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../styles/Auth.css";

class Auth extends Component {
  state = {
    username: "",
    notFound: false
  };

  handleChange = event => {
    const username = event.target.value;
    this.setState({ username, notFound: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login } = this.props;
    const { username } = this.state;
    login(username)
      .then(() => navigate("/"))
      .catch(() => this.setState({ notFound: true }));
  };

  render() {
    if (this.props.user) {
      return (
        <div className="Auth">
          <p>Hi, {this.props.user.name}</p>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      );
    }
    return (
      <div className="Auth">
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input onChange={this.handleChange} value={this.state.username} />
          <button type="submit">Log in</button>
        </form>
        {this.state.notFound && (
          <span>
            <br />
            Sorry, we couldn't find that username.
          </span>
        )}
      </div>
    );
  }
}

export default Auth;
