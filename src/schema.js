const { graphqlExpress, ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("./resolvers");

const typeDefs = gql`
  type Query {
    status: String
    books: [Book]
  }
  type Book {
    url: String
    name: String
    isbn: String
    mediaType: String
    released: String
  }
`;

module.exports = new ApolloServer({ typeDefs, resolvers });
