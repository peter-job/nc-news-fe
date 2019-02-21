import React from "react";
import Article from "./Article";
import "../styles/ArticleList.css";

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map((article, i) => {
        return (
          <li key={i}>
            <Article article={article} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
