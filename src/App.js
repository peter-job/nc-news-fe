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

  componentDidMount() {
    const retrievedState = localStorage.getItem("state");
    if (retrievedState) {
      this.setState(JSON.parse(retrievedState));
    }
  }

  componentDidUpdate() {
    this.handleSave();
  }

  handleSave = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  setUser = username => {
    return getUserByUsername(username).then(user => this.setState({ user }));
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Navbar user={user} />
        <Router className="Router">
          <Auth path="/login" login={this.setUser} user={this.state.user} />
          <Home path="/" />
          <ArticlePage path="/articles/:id" />
          <NoMatch default />
        </Router>
      </div>
    );
  }
}

export default App;
