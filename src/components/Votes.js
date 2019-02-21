import React, { Component, Fragment } from "react";
import { patchVotes } from "../api";

class Vote extends Component {
  //save this to localstorage
  state = {
    voted: 0
  };

  handleVote = vote => {
    let { voted } = this.state;
    const { article_id, comment_id } = this.props;
    let update = 0;
    if (voted === vote) {
      voted = 0;
      update = -vote;
    } else if (voted === -vote) {
      voted = vote;
      update = vote * 2;
    } else {
      voted = vote;
      update = vote;
    }
    this.setState({ voted });
    patchVotes(update, article_id, comment_id);
  };

  render() {
    const { votes, path } = this.props;
    const { voted } = this.state;
    return (
      <Fragment>
        <span
          className={`up noselect ${voted > 0 ? "Voted" : ""}`}
          onClick={() => this.handleVote(1)}
        >
          <i className="fi-arrow-up" />{" "}
        </span>

        <span className="count noselect">{votes + voted}</span>

        <span
          className={`down noselect ${voted < 0 ? "Voted" : ""}`}
          onClick={() => this.handleVote(-1)}
        >
          <i className="fi-arrow-down" />{" "}
        </span>
      </Fragment>
    );
  }
}

export default Vote;
