const express = require("express");
// const bodyParser = require("body-parser"); // included with apollo-server-express now
// https://dev.to/gloriamaris/apollo-server-express-10-to-20-fix-graphiqlexpress-and-graphiqlexpress-is-not-a-function-in-a-tutorial-by-xoor-41jn
const { graphqlExpress, ApolloServer, gql } = require("apollo-server-express");
const moment = require("moment");
const os = require("os");

const PORT = 3000;

const app = express();

const Query = gql`
  type Query {
    status: Status
    cpuDetails(cpuNumber: Int): CPU
    cpuList: [CPU]
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const Status = gql`
  type Status {
    code: Int
    message: String
    lastUpdated: String
  }
`;

const CPU = gql`
  type CPU {
    model: String
    speed: String
    times: Times
  }
`;
const Times = gql`
  type Times {
    user: Int
    nice: Int
    sys: Int
    idle: Int
    irq: Int
  }
`;


let resolvers = {
  Query: {
    status: () => ({ code: 200, msg: "ok" }),
    cpuDetails: (obj, args) => os.cpus()[args.cpuNumber],
    cpuList: () => os.cpus()
  },
  Status: {
    message: (obj) => obj.msg,
    lastUpdated: () => moment().format(),
  },
  /*CPU: {
    model: (cpu) => cpu.model,
    speed: (cpu) => cpu.speed,
    times: (cpu) => cpu.times,
  },*/  // Each CPU field is a trivial resolver, so we don't need to explicitly write them
  /*Times: {
    user: (times) => times.user,
    nice: (times) => times.nice,
    sys: (times) => times.sys,
    idle: (times) => times.idle,
    irq: (times) => times.irq,
  },*/
};

const typeDefs = [Query, Mutation, Status, CPU, Times];

const graphQLSchema = new ApolloServer({
  typeDefs,
  resolvers,
}); // TODO

app.get("/status", (req, res) => res.send("Express status: OK"));
// app.use("graphql", graphqlExpress({ schema: graphQLSchema }));
graphQLSchema.applyMiddleware({ app });

console.log(`Express running on ${PORT}`);
app.listen(PORT);
