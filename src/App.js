import React, { Component } from "react";
import { Router } from "@reach/router";
import "./styles/App.css";
import "./styles/Router.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import ArticlePage from "./components/ArticlePage";
import { getUserByUsername } from "./api";

class App extends Component {
  state = {
    user: null
  };

  setUser = username => {
    getUserByUsername(username).then(user => {
      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Navbar username={user ? user.username : ""} />
        <Auth login={this.setUser} user={this.state.user}>
          <Router className="Router">
            <Home path="/" />
            <ArticlePage path="/articles/:id" />
            <NoMatch default />
          </Router>
        </Auth>
      </div>
    );
  }
}

export default App;
