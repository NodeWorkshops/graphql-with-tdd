jest.mock("axios");
const request = require("supertest");
const app = require("../app");

describe("Fetching books", () => {
  test("It should respond with a list of all the books", async () => {
    const response = await request(app)
      .post("/graphql")
      .send({ query: "query { books { name } } " });
    expect(response.statusCode).toBe(200);
    expect(response.body.data.books.length).toBe(10);
    console.log(response.body.data.books)
  });
});
