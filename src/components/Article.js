import React from "react";
import { Link } from "@reach/router";
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
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </div>
      <div className="Votes">
        <Votes votes={article.votes} article_id={article.article_id} />
      </div>
    </div>
  );
};

export default Article;
