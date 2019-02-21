import React, { Component } from "react";
import { Router } from "@reach/router";
import "./styles/App.css";
import "./styles/Router.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router className="Router">
          <Home path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
