import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/NewComment.css";
import { postComment } from "../api";

class NewComment extends Component {
  state = {
    body: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { user, article_id } = this.props;
    postComment(article_id, user.username, body).then(() =>
      this.props.handler()
    );
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  render() {
    const { user } = this.props;
    const { isLoading } = this.state;
    if (!user) {
      return (
        <div className="NewComment">
          <Link to="/login">Please login first.</Link>
        </div>
      );
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="NewComment">
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <textarea
            className="commentTextarea"
            placeholder="Say something!"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <br />
          <input type="submit" value="Comment" />
        </form>
      </div>
    );
  }
}

export default NewComment;
