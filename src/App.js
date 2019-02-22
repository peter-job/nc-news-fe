import React, { Component } from "react";
import { Router } from "@reach/router";
import "./styles/App.css";
import "./styles/Router.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import ArticlePage from "./components/ArticlePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router className="Router">
          <Home path="/" />
          <ArticlePage path="/articles/:id" />
          <NoMatch default />
        </Router>
      </div>
    );
  }
}

export default App;
