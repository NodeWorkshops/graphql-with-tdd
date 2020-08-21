const express = require("express");
// const bodyParser = require("body-parser"); // included with apollo-server-express now
// https://dev.to/gloriamaris/apollo-server-express-10-to-20-fix-graphiqlexpress-and-graphiqlexpress-is-not-a-function-in-a-tutorial-by-xoor-41jn
const { graphqlExpress, ApolloServer, gql } = require("apollo-server-express");
const moment = require("moment");
const os = require("os");
const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => console.log(`Express running on ${PORT}`));
