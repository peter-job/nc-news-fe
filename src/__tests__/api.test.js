const { fetchArticles, patchVotes } = require("../api");

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
