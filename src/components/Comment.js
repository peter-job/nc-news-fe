import React from "react";
import "../styles/Comment.css";
import Moment from "moment";
import Votes from "./Votes";

const Comment = ({ comment, article_id }) => {
  return (
    <div className="Comment">
      <div className="avatar">
        <img
          alt={comment.author}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
        />
      </div>
      <div className="author">
        <span>
          {comment.author}
          <br />
          {Moment(comment.created_at, "YYYY-MM-DD-Thh:mm:ss").fromNow()}
        </span>
      </div>
      <div className="body">
        <p>{comment.body}</p>
      </div>
      <div className="Votes">
        <Votes
          votes={comment.votes}
          article_id={article_id}
          comment_id={comment.comment_id}
        />
      </div>
    </div>
  );
};

export default Comment;
