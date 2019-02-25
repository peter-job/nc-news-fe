import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
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
    user: null,
    page: "Home"
  };

  navOptions = [
    { value: "/", name: "Home" },
    { value: "/login", name: "Login" }
  ];

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

  handleNavbar = ({ field, value, name }) => {
    this.setState({ page: name });
    navigate(value);
  };

  render() {
    const { user, page } = this.state;
    return (
      <div className="App">
        <Navbar
          user={user}
          navOptions={this.navOptions}
          handler={this.handleNavbar}
          selected={page}
        />
        <Router className="Router">
          <Auth
            path="/login"
            login={this.setUser}
            logout={() => this.setState({ user: null })}
            user={this.state.user}
          />
          <Home path="/" />
          <ArticlePage path="/articles/:id" />
          <NoMatch default />
        </Router>
      </div>
    );
  }
}

export default App;
