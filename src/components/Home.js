import React, { Component } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../api";
import { throttle } from "lodash";
import ContentOptions from "./ContentOptions";

class Home extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    page: 1,
    topic: null,
    hasAllArticles: false
  };

  sortOptions = [
    { value: "title", name: "Title" },
    { value: "topic", name: "Topic" },
    { value: "created_at", name: "Date" },
    { value: "votes", name: "Votes" },
    { value: "comment_count", name: "Comments" }
  ];

  orderOptions = [
    { value: "asc", name: "Ascending" },
    { value: "desc", name: "Descending" }
  ];

  componentDidMount() {
    const { sort_by } = this.state;
    getArticles(sort_by).then(articles => this.setState({ articles }));
    this.addScrollEventListener();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, hasAllArticles, sort_by, order } = this.state;
    const topicChange = false; //no topic functionality yet
    const pageChange = prevState.page !== page;
    const sortChange = prevState.sort_by !== sort_by;
    const orderChange = prevState.order !== order;

    if (
      ((topicChange || pageChange) && !hasAllArticles) ||
      sortChange ||
      orderChange
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { sort_by, order, page } = this.state;

    getArticles({ sort_by, order, p: page })
      .then(newArticles => {
        this.setState(({ page, articles }) => ({
          articles: page === 1 ? newArticles : [...articles, ...newArticles],
          isLoading: false
        }));
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ hasAllArticles: true });
        }
      });
  };

  addScrollEventListener() {
    document
      .querySelector(".ArticleList")
      .addEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle(event => {
    const { clientHeight, scrollTop, scrollHeight } = event.target;
    const distanceFromBottom = scrollHeight - (clientHeight + scrollTop);
    if (distanceFromBottom < 150) {
      this.setState(({ page }) => ({ page: ++page }));
    }
  }, 1000);

  updateContentOptions = ({ field, value }) => {
    this.setState({ [field]: value });
  };

  render() {
    const { articles, sort_by, order } = this.state;
    return (
      <div className="ArticleList">
        <ContentOptions
          handler={this.updateContentOptions}
          sort_by={sort_by}
          order={order}
          sortOptions={this.sortOptions}
          orderOptions={this.orderOptions}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default Home;
