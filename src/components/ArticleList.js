import React from "react";
import Article from "./Article";
import "../styles/ArticleList.css";

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => {
        return (
          <li key={article.title}>
            <Article article={article} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
