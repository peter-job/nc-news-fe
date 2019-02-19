import React, { Component, Fragment } from "react";
// import patchRequest from api

class Vote extends Component {
  //save this to localstorage
  state = {
    voted: 0
  };

  incVotes = path => {
    const { voted } = this.state;
    if (voted < 1) {
      this.setState({ voted: voted + 1 });
      //  patchRequest(path, { inc_votes: 1 });
    }
  };
  decVotes = path => {
    const { voted } = this.state;
    if (voted > -1) {
      this.setState({ voted: voted - 1 });
      //  patchRequest(path, { inc_votes: -1 });
    }
  };

  render() {
    const { votes, path } = this.props;
    const { voted } = this.state;
    return (
      <Fragment>
        <span
          className={`up noselect ${voted > 0 ? "Voted" : ""}`}
          onClick={() => this.incVotes(path)}
        >
          <i class="fi-arrow-up" />{" "}
        </span>

        <span className="count noselect">{votes + voted}</span>

        <span
          className={`down noselect ${voted < 0 ? "Voted" : ""}`}
          onClick={() => this.decVotes(path)}
        >
          <i class="fi-arrow-down" />{" "}
        </span>
      </Fragment>
    );
  }
}

export default Vote;
