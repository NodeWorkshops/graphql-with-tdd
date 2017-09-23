// ./src/app.js 

const express = require('express')
const bodyparser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const app = express()

const typeDefs = `
 type Query {
   status: String   
 }
`

const resolvers = {
 Query: {
   status: () => "GrpahQL status: OK"
 }
}

const graphQLSchema =  makeExecutableSchema({
 typeDefs,
 resolvers
});


app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyparser.json(), graphqlExpress({ schema: graphQLSchema }))

module.exports = app