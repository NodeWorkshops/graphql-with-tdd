// ./src/app.js 
const express = require('express')
const bodyparser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema.js')

const app = express()

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyparser.json(), graphqlExpress({ schema }))

module.exports = app