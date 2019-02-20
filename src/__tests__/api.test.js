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
});
