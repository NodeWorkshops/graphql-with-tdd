jest.mock("axios");

const { graphql } = require("graphql");
const schema = require("../schema");
const app = require("../app");
const { Query, Book } = require("../resolvers");
const { createTestClient } = require("apollo-server-testing");
const { query } = createTestClient(schema);

describe("resolvers - Query.books", () => {
  test("It should respond with the books", async () => {
    const testQuery = "{books { name, isbn } }";
    // const result = await query({ query: testQuery });
    const books = await Query.books();
    expect(books.length).toBe(10);
    expect(books[0].name).toBe("A Game of Thrones");
    expect(books[0].isbn).toBe("978-0553103540");
    expect(books[2].name).toBe("A Storm of Swords");
    expect(books[9].isbn).toBe("978-0345537263");
  });
});
