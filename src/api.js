import axios from "axios";
const BASE_URL = "https://be2-nc-news.herokuapp.com/api/";

export const fetchArticles = (sort_by = "created_at") => {
  const path = `articles?sort_by=${sort_by}`;
  console.log(`${BASE_URL + path}`);
  return axios.get(`${BASE_URL + path}`).then(({ data }) => data.articles);
};

export const patchVotes = (voted, article_id, comment_id) => {
  const body = { inc_votes: voted };
  const path = `articles/${article_id}${
    comment_id ? `/comments/${comment_id}` : ""
  }`;
  return axios.patch(`${BASE_URL + path}`, body);
};
