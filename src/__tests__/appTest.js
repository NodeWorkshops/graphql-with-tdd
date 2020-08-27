const request = require("supertest");
const app = require("../app");

describe("Graphql status", () => {
  test("It should respond with a success message", async () => {
    const response = await request(app)
      .post("/graphql")
      .send({ query: "query { status }" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchSnapshot();
  });
});
