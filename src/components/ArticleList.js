import React from "react";
import Article from "./Article";
import "../styles/ArticleList.css";

const ArticleList = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="Loading">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <ul>
      {articles.map(article => {
        return (
          <li key={article.article_id}>
            <Article article={article} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
