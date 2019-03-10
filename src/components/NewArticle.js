import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import "../styles/NewArticle.css";
import { getTopics, postArticle } from "../api";

class NewArticle extends Component {
  state = {
    topics: null,
    isLoading: true,
    topic: "",
    title: "",
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
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { user } = this.props;
    const { isLoading, topics } = this.state;
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
        <p>New Article</p>
        <form className="articleForm" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Title"
            className="titleInput"
            name="title"
            value={this.state.Title}
          />
          <br />
          <textarea
            className="articleTextarea"
            placeholder="Say something!"
            name="body"
            onChange={this.handleChange}
            value={this.state.Body}
          />
          <br />
          <select
            name="topic"
            onChange={this.handleChange}
            value={this.state.Topic}
            defaultValue="Topic"
          >
            <option disabled hidden>
              Topic
            </option>{" "}
            {topics.map(topic => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
          </select>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default NewArticle;
