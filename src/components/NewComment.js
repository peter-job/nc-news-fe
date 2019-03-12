import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import "../styles/NewArticle.css";
import { getTopics, postArticle } from "../api";

class NewArticle extends Component {
  state = {
    topics: null,
    isLoading: true,
    body: ""
  };

  componentDidMount() {
    getTopics().then(topics => this.setState({ topics, isLoading: false }));
  }

  handleSubmit = event => {
    event.preventDefault();
    const { topic, title, body } = this.state;
    const { user } = this.props;
    console.log(this.state);
    postArticle(topic, title, body, user.username).then(article => {
      console.log("navigating away!");
      navigate("/articles/" + article.article_id);
    });
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  render() {
    const { user } = this.props;
    const { isLoading } = this.state;
    if (!user) {
      return (
        <div className="NewArticle">
          <Link to="/login">Please login first.</Link>
        </div>
      );
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="NewArticle">
        <form className="articleForm" onSubmit={this.handleSubmit}>
          <textarea
            className="articleTextarea"
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

export default NewArticle;
