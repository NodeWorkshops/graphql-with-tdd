const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = `
    type Query {
        status: String
    }
`;
const resolvers = {
  Query: {
    status: () => "GraphQL status: OK",
  },
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
