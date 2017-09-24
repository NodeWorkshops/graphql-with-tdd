// ./src/schema.js
const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
type Query {
  status: String   
}
`

module.exports =  makeExecutableSchema({ typeDefs, resolvers })
