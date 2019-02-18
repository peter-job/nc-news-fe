import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <div>
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
