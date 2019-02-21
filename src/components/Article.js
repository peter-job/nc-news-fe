import React from "react";
import "../styles/Article.css";
import Moment from "moment";
import Votes from "./Votes";

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
          <br />
          {Moment(article.created_at, "YYYY-MM-DD-Thh:mm:ss").fromNow()}
        </span>
      </div>
      <div className="topic">
        <span />
      </div>
      <div className="title">
        <span>{article.title}</span>
      </div>
      <div className="Votes">
        <Votes votes={article.votes} article_id={article.article_id} />
      </div>
    </div>
  );
};

export default Article;
