const {
  getArticles,
  getArticleById,
  patchVotes,
  getCommentsByArticleId,
  getUserByUsername,
  getUsers,
  getTopics,
  postArticle,
  postComment
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
        expect(article).toHaveProperty("avatar_url");
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
      .then(() => getArticles({ sort_by: "title" }))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) =>
          a.title.toLowerCase() <= b.title.toLowerCase() ? 0 : -1
        );
        expect(articles).toEqual(copy);
      })
      .then(() => getArticles({ sort_by: "votes" }))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) => (a.votes <= b.votes ? 0 : -1));
        expect(articles).toEqual(copy);
      })
      .then(() => getArticles({ sort_by: "comment_count" }))
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

describe("getTopics", () => {
  it("returns a list of topics", () => {
    return getTopics().then(topics => {
      expect(topics.length).toBeGreaterThan(1);
      topics.forEach(topic => {
        expect(topic).toHaveProperty("slug");
        expect(topic).toHaveProperty("description");
      });
    });
  });
});

describe("postArticle", () => {
  it("posts an article and returns if successful", () => {
    const username = "jessjelly";
    const title = "A New Way to Code.";
    const body =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla diam, efficitur vel eros convallis, feugiat convallis eros. Vivamus vel leo nec dolor maximus faucibus sed sit amet metus. Integer aliquet turpis elit, sed fringilla diam commodo ut. Aliquam quis est augue. Nam non enim eget dui consectetur varius id vitae est. Curabitur vitae nisl elit. Etiam non aliquam risus. Nullam nunc turpis, consectetur vitae pretium eu, eleifend ut ex.";
    const topic = "coding";
    return postArticle(topic, title, body, username).then(article => {
      expect(article).toHaveProperty("topic", "coding");
      expect(article).toHaveProperty("username", "jessjelly");
      expect(article).toHaveProperty("title", "A New Way to Code.");
      expect(article).toHaveProperty(
        "body",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla diam, efficitur vel eros convallis, feugiat convallis eros. Vivamus vel leo nec dolor maximus faucibus sed sit amet metus. Integer aliquet turpis elit, sed fringilla diam commodo ut. Aliquam quis est augue. Nam non enim eget dui consectetur varius id vitae est. Curabitur vitae nisl elit. Etiam non aliquam risus. Nullam nunc turpis, consectetur vitae pretium eu, eleifend ut ex."
      );
      expect(article).toHaveProperty("votes");
      expect(article).toHaveProperty("created_at");
    });
  });
});

describe("postComment", () => {
  it("posts comment and returns if successful", () => {
    const username = "jessjelly";
    const article_id = "1";
    const body =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla diam, efficitur vel eros convallis, feugiat convallis eros.";
    return postComment(article_id, username, body).then(comment => {
      expect(comment).toHaveProperty("username", "jessjelly");
      expect(comment).toHaveProperty(
        "body",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla diam, efficitur vel eros convallis, feugiat convallis eros."
      );
      expect(comment).toHaveProperty("votes");
      expect(comment).toHaveProperty("created_at");
    });
  });
});
