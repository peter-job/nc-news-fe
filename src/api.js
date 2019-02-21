import axios from "axios";
const BASE_URL = "https://be2-nc-news.herokuapp.com/api/";

export const getArticles = sort_by => {
  console.log(sort_by);
  const path = `articles?sort_by=${sort_by}`;
  return axios.get(`${BASE_URL + path}`).then(({ data }) => data.articles);
};

export const getArticleById = article_id => {
  const path = `articles/` + article_id;
  return axios.get(`${BASE_URL + path}`).then(({ data }) => data.article);
};

export const patchVotes = (voted, article_id, comment_id) => {
  const body = { inc_votes: voted };
  const path = `articles/${article_id}${
    comment_id ? `/comments/${comment_id}` : ""
  }`;
  return axios
    .patch(`${BASE_URL + path}`, body)
    .then(({ data }) => (data.article ? data.article : data.comment));
};

export const getCommentsByArticleId = article_id => {
  const path = `articles/${article_id}/comments`;
  return axios.get(`${BASE_URL + path}`).then(({ data }) => data.comments);
};

export const getUserByUsername = username => {
  const path = `users/${username}`;
  return axios.get(`${BASE_URL + path}`).then(({ data }) => data.user);
};

export const getUsers = () => {
  const path = `users`;
  return axios.get(`${BASE_URL + path}`).then(({ data }) => data.users);
};
