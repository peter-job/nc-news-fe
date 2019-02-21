import React, { Component, Fragment } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../api";
import { throttle } from "lodash";

class Home extends Component {
  state = {
    articles: [],
    contentOptions: { sort_by: "created_at", order: "desc", limit: 10 },
    page: 1,
    hasAllArticles: false
  };

  componentDidMount() {
    const { sort_by } = this.state.contentOptions;
    getArticles(sort_by).then(articles => this.setState({ articles }));
    this.addScrollEventListener();
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { page } = this.state;

    getArticles({ topic, page })
      .then(newArticles => {
        this.setState(({ page, articles }) => ({
          articles: page === 1 ? newArticles : [...articles, ...newArticles],
          isLoading: false
        }));
      })
      .catch(err => {
        if (err.status === 404) {
          this.setState({ hasAllArticles: true });
        }
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic, page, hasAllArticles } = this.state;
    const topicChange = prevProps.topic !== topic;
    const pageChange = prevState.page !== page;
    if ((topicChange || pageChange) && !hasAllArticles) {
      this.fetchArticles();
    }
  }

  addScrollEventListener() {
    document
      .querySelector(".ArticleList")
      .addEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle(event => {
    console.log("scrolling..");
    const { clientHeight, scrollTop, scrollHeight } = event.target;
    const distanceFromBottom = scrollHeight - (clientHeight + scrollTop);
    if (distanceFromBottom < 150) {
      console.log("time to fetch more articles");
      this.setState(({ page }) => ({ page: ++page }));
    }
  }, 2000);

  render() {
    const { articles } = this.state;
    return (
      <div className="ArticleList">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default Home;
