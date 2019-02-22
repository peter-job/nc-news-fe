import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="Comment">
      <p>{comment.author}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
