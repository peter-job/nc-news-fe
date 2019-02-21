import React, { Component, Fragment } from "react";
import ArticleList from "./ArticleList";
import { fetchArticles } from "../api";

class Home extends Component {
  state = {
    articles: [],
    contentOptions: { sort_by: "created_at", order: "desc", limit: 10 }
  };

  componentDidMount() {
    const { sort_by } = this.state.contentOptions;
    fetchArticles(sort_by).then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    return (
      <Fragment>
        <ArticleList articles={articles} />
      </Fragment>
    );
  }
}

export default Home;
