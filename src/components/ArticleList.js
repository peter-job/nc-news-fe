import React from "react";
import Article from "./Article";
import "../styles/ArticleList.css";

const ArticleList = ({ articles }) => {
  return (
    <div className="ArticleList">
      <ul>
        {articles.map(article => {
          return (
            <li key={article.title}>
              <Article article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
