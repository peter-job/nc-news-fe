import React from "react";
import "../styles/Article.css";

const Article = ({ article }) => {
  return (
    <div>
      <span>{article.title}</span>
    </div>
  );
};

export default Article;
