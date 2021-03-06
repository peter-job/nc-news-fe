import axios from "axios";

const request = axios.create({
  baseURL: "https://be2-nc-news.herokuapp.com/api/"
});

export const getArticles = params => {
  const path = `articles`;
  return request.get(path, { params }).then(({ data }) => {
    const articles = data.articles;
    return Promise.all(
      articles.map(article =>
        getUserByUsername(article.author).then(user => {
          article.avatar_url = user.avatar_url;
          return article;
        })
      )
    );
  });
};

export const getArticleById = article_id => {
  const path = `articles/` + article_id;
  return request.get(path).then(({ data }) => {
    const article = data.article;
    return getUserByUsername(article.author).then(user => {
      article.avatar_url = user.avatar_url;
      return article;
    });
  });
};

export const patchVotes = (voted, article_id, comment_id) => {
  const body = { inc_votes: voted };
  const path = `articles/${article_id}${
    comment_id ? `/comments/${comment_id}` : ""
  }`;
  return request
    .patch(path, body)
    .then(({ data }) => (data.article ? data.article : data.comment));
};

export const getCommentsByArticleId = (article_id, params) => {
  const path = `articles/${article_id}/comments`;
  return request.get(path, { params }).then(({ data }) => {
    const comments = data.comments;
    return Promise.all(
      comments.map(comment =>
        getUserByUsername(comment.author).then(user => {
          comment.avatar_url = user.avatar_url;
          return comment;
        })
      )
    );
  });
};

export const getUserByUsername = username => {
  const path = `users/${username}`;
  return request.get(path).then(({ data }) => data.user);
};

export const getUsers = () => {
  const path = `users`;
  return request.get(path).then(({ data }) => data.users);
};

export const getTopics = () => {
  const path = "topics";
  return request.get(path).then(({ data }) => data.topics);
};

export const postArticle = (topic, title, body, username) => {
  const path = `topics/${topic}/articles`;
  return request
    .post(path, { title, body, username })
    .then(({ data }) => data.article);
};

export const postComment = (article_id, username, body) => {
  const path = `articles/${article_id}/comments`;
  return request
    .post(path, { username, body })
    .then(({ data }) => data.comment);
};
