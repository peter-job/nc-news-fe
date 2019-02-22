import React, { Fragment, Component } from "react";
import Article from "./Article";
import Comment from "./Comment";
import { getArticleById, getCommentsByArticleId } from "../api";
import ContentOptions from "./ContentOptions";
import { throttle } from "lodash";
import "../styles/ArticlePage.css";

class ArticlePage extends Component {
  state = {
    article: null,
    comments: null,
    isLoading: true,
    hasError: false,
    sort_by: "created_at",
    order: "desc",
    page: 1,
    hasAllComments: false
  };

  sortOptions = [
    { value: "created_at", name: "Date" },
    { value: "votes", name: "Votes" },
    { value: "comments.username", name: "User" }
  ];

  orderOptions = [
    { value: "asc", name: "Ascending" },
    { value: "desc", name: "Descending" }
  ];

  componentDidMount() {
    const { id } = this.props;
    if (!this.state.article) {
      getArticleById(id)
        .then(article => {
          this.setState({ article });
        })
        .then(() => getCommentsByArticleId(id))
        .then(comments => {
          this.setState({ comments, isLoading: false });
        })
        .catch(err => this.setState({ hasError: true }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props;
    const { page, hasAllComments, sort_by, order, isLoading } = this.state;
    const pageChange = prevState.page !== page;
    const sortChange = prevState.sort_by !== sort_by;
    const orderChange = prevState.order !== order;

    if ((pageChange && !hasAllComments) || sortChange || orderChange) {
      this.fetchComments();
    }

    if (prevState.isLoading === true && isLoading === false) {
      this.addScrollEventListener();
    }
  }

  fetchComments = () => {
    const { sort_by, order, page } = this.state;
    const { id } = this.props;
    console.log(page);
    getCommentsByArticleId(id, { sort_by, order, p: page })
      .then(newComments => {
        this.setState(({ page, comments }) => ({
          comments: page === 1 ? newComments : [...comments, ...newComments],
          isLoading: false
        }));
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ hasAllComments: true });
        }
      });
  };

  addScrollEventListener() {
    console.log("adding");
    document
      .querySelector(".ArticlePage")
      .addEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle(event => {
    console.log("scrolling");
    const { clientHeight, scrollTop, scrollHeight } = event.target;
    const distanceFromBottom = scrollHeight - (clientHeight + scrollTop);
    if (distanceFromBottom < 150) {
      this.setState(({ page }) => ({ page: ++page }));
    }
  }, 1000);

  updateContentOptions = ({ field, value }) => {
    this.setState({ [field]: value });
  };

  updateContentOptions = ({ field, value }) => {
    this.setState({ [field]: value });
  };

  render() {
    const {
      article,
      comments,
      isLoading,
      hasError,
      sort_by,
      order
    } = this.state;
    if (hasError) {
      return <p>Something went wrong...</p>;
    }
    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="ArticlePage">
        <Article key={article.title} article={article} full={true} />
        <div className="CommentsHeader">
          <br />
          <h3>Comments</h3>
          <br />
        </div>
        <ContentOptions
          handler={this.updateContentOptions}
          sort_by={sort_by}
          order={order}
          sortOptions={this.sortOptions}
          orderOptions={this.orderOptions}
        />
        <div className="CommentList">
          {comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default ArticlePage;
