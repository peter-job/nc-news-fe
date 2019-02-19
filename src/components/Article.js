import React from "react";
import "../styles/Article.css";

const Article = ({ article }) => {
  return (
    <div className="Article">
      <div className="avatar">
        <img
          alt={article.author}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
        />
      </div>
      <div className="author">
        <span>
          {article.author} in {article.topic}
        </span>
      </div>
      <div className="topic">
        <span />
      </div>
      <div className="title">
        <span>{article.title}</span>
      </div>
      <div className="controls">
        <span>votes: {article.votes}</span>
      </div>
    </div>
  );
};

export default Article;
