import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/NewArticle.css";
import { getTopics } from "../api";

class NewArticle extends Component {
  state = {
    topics: null,
    isLoading: true,
    title: "",
    topic: "",
    body: ""
  };

  componentDidMount() {
    getTopics().then(topics => this.setState({ topics, isLoading: false }));
  }

  handleSubmit = event => {
    event.preventDefault();
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
        <form>
          <label>Title: </label>
          <input type="text" />
          <select>
            {topics.map(topic => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
          </select>
          <textarea cols="32" rows="4" />
          <br />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default NewArticle;
