import React, { Fragment, Component } from "react";
import Article from "./Article";
import Comment from "./Comment";
import { getArticleById, getCommentsByArticleId } from "../api";

class ArticlePage extends Component {
  state = {
    article: null,
    comments: null,
    isLoading: true,
    hasError: false
  };

  async componentDidMount() {
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

  render() {
    const { article, comments, isLoading, hasError } = this.state;
    if (hasError) {
      return <p>Something went wrong...</p>;
    }
    if (isLoading) return <p>Loading...</p>;
    return (
      <Fragment>
        <div className="ContentList">
          <Article key={article.title} article={article} />
        </div>
        <div className="ContentList">
          {comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ArticlePage;
