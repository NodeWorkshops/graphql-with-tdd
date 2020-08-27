const express = require("express");
// const bodyParser = require("body-parser"); // included with apollo-server-express now
// https://dev.to/gloriamaris/apollo-server-express-10-to-20-fix-graphiqlexpress-and-graphiqlexpress-is-not-a-function-in-a-tutorial-by-xoor-41jn

const schema = require("./schema");

const app = express();

app.get("/status", (req, res) => res.send("Express status: OK"));
// app.use("graphql", graphqlExpress({ schema: graphQLSchema }));
schema.applyMiddleware({ app });

module.exports = app;
