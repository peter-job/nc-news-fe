const {
  getArticles,
  getArticleById,
  patchVotes,
  getCommentsByArticleId,
  getUserByUsername,
  getUsers
} = require("../api");

describe("getArticles", () => {
  it("returns a list of articles from the nc-news backend", () => {
    return getArticles().then(articles => {
      expect(articles.length).toEqual(10);
      articles.forEach(article => {
        expect(article).toHaveProperty("article_id");
        expect(article).toHaveProperty("author");
        expect(article).toHaveProperty("title");
        expect(article).toHaveProperty("created_at");
        expect(article).toHaveProperty("topic");
        expect(article).toHaveProperty("comment_count");
      });
    });
  });

  it("accepts a sort_by parameter for articles returned, default value is 'created_at'", () => {
    return getArticles()
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) => (a.created_at <= b.created_at ? 0 : -1));
        expect(articles).toEqual(copy);
      })
      .then(() => getArticles("title"))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) =>
          a.title.toLowerCase() <= b.title.toLowerCase() ? 0 : -1
        );
        expect(articles).toEqual(copy);
      })
      .then(() => getArticles("votes"))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) => (a.votes <= b.votes ? 0 : -1));
        expect(articles).toEqual(copy);
      })
      .then(() => getArticles("comment_count"))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) => (a.comment_count <= b.comment_count ? 0 : -1));
        expect(articles).toEqual(copy);
      });
  });
});

describe("getArticleById", () => {
  it("returns an article with the given article_id", () => {
    return getArticleById(1).then(article => {
      expect(article).toHaveProperty("article_id", 1);
      expect(article).toHaveProperty("author");
      expect(article).toHaveProperty("title");
      expect(article).toHaveProperty("created_at");
      expect(article).toHaveProperty("topic");
      expect(article).toHaveProperty("comment_count");
      expect(article).toHaveProperty("body");
    });
  });
});

describe("patchVotes", () => {
  it("updates an articles votes if no comment_id is provided", () => {
    let votes = 0;
    return getArticleById(1)
      .then(article => {
        votes = article.votes;
        return patchVotes(1, 1);
      })
      .then(article => {
        expect(article.votes).toEqual(votes + 1);
        return article;
      })
      .then(article => {
        votes = article.votes;
        return patchVotes(-1, 1);
      })
      .then(article => {
        expect(article.votes).toEqual(votes - 1);
      });
  });
  it("updates a comments votes if a comment_id is provided", () => {
    let votes = 0;
    let comment_id = 0;
    return getCommentsByArticleId(1)
      .then(comments => {
        comment_id = comments[0].comment_id;
        votes = comments[0].votes;
        return patchVotes(1, 1, comment_id);
      })
      .then(comment => {
        expect(comment.votes).toEqual(votes + 1);
        return comment;
      })
      .then(comment => {
        votes = comment.votes;
        return patchVotes(-1, 1, comment_id);
      })
      .then(comment => {
        expect(comment.votes).toEqual(votes - 1);
      });
  });
});

describe("getCommentsByArticleId", () => {
  it("returns comments for the given article_id", () => {
    return getCommentsByArticleId(1).then(comments => {
      expect(comments.length).toBeGreaterThan(1);
      comments.forEach(comment => {
        expect(comment).toHaveProperty("comment_id");
        expect(comment).toHaveProperty("author");
        expect(comment).toHaveProperty("votes");
        expect(comment).toHaveProperty("created_at");
        expect(comment).toHaveProperty("body");
      });
    });
  });
});

describe("getUsers", () => {
  it("returns an array of users", () => {
    return getUsers().then(users => {
      expect(users.length).toBeGreaterThan(1);
      users.forEach(user => {
        expect(user).toHaveProperty("username");
        expect(user).toHaveProperty("avatar_url");
        expect(user).toHaveProperty("name");
      });
    });
  });
});

describe("getUserByUsername", () => {
  it("returns a user for the given username", () => {
    return getUsers()
      .then(users => getUserByUsername(users[0].username))
      .then(user => {
        expect(user).toHaveProperty("username");
        expect(user).toHaveProperty("avatar_url");
        expect(user).toHaveProperty("name");
      });
  });
});
