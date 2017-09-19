const express = require('express')
const bodyparser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')


const PORT = 3000

const app = express()

const typeDefs = `
  type Status {
    code: Int
    message: String    
  }

  type Query {
    status: Status    
  }
`

const resolvers = {
  Query: {
    status: () => ({ code: 200, msg: "OK" })
  },
  Status: {
    code: (obj) => obj.code,
    message: (obj) => obj.msg
  }
}

const graphQLSchema =  makeExecutableSchema({
  typeDefs,
  resolvers,
});


app.get('/status', (req, res) => res.send('Express status: OK'))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyparser.json(), graphqlExpress({ schema: graphQLSchema }))

console.log(`Express running on ${PORT}`)
app.listen(PORT)