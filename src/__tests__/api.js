const {
  fetchArticles,
  fetchArticleById,
  patchVotes,
  fetchCommentsByArticleId
} = require("../api");

describe("fetchArticles", () => {
  it("returns a list of articles from the nc-news backend", () => {
    return fetchArticles().then(articles => {
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
    return fetchArticles()
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) => (a.created_at <= b.created_at ? 0 : -1));
        expect(articles).toEqual(copy);
      })
      .then(() => fetchArticles("title"))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) =>
          a.title.toLowerCase() <= b.title.toLowerCase() ? 0 : -1
        );
        expect(articles).toEqual(copy);
      })
      .then(() => fetchArticles("votes"))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) => (a.votes <= b.votes ? 0 : -1));
        expect(articles).toEqual(copy);
      })
      .then(() => fetchArticles("comment_count"))
      .then(articles => {
        const copy = articles.slice();
        copy.sort((a, b) => (a.comment_count <= b.comment_count ? 0 : -1));
        expect(articles).toEqual(copy);
      });
  });
});

describe("fetchArticleById", () => {
  it("returns an article with the given article_id", () => {
    return fetchArticleById(1).then(article => {
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
    return fetchArticleById(1)
      .then(article => {
        votes = article.votes;
        return patchVotes(1, 1);
      })
      .then(article => {
        expect(article.votes).toEqual(votes + 1);
      })
      .then(() => fetchArticleById(1))
      .then(article => {
        votes = article.votes;
        return patchVotes(-1, 1);
      })
      .then(article => {
        expect(article.votes).toEqual(votes - 1);
      });
  });
});

describe("fetchCommentsByArticleId", () => {
  it("returns comments for the given article_id", () => {
    return fetchCommentsByArticleId(1).then(comments => {
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
