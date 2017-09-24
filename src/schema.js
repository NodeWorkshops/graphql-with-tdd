// ./src/schema.js
const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
type Query {
  status: String,
  books: [Book]   
}

type Book {
    url: String
    name: String
    isbn: String
    mediaType: String
    released: String
}
`

module.exports =  makeExecutableSchema({ typeDefs, resolvers })
