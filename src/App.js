import React, { Component } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import data from "./data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ArticleList articles={data.articles} />
      </div>
    );
  }
}

export default App;
