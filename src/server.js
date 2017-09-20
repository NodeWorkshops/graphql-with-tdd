const express = require('express')
const bodyparser = require('body-parser')
const os = require('os')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')


const PORT = 3000

const app = express()

const typeDefs = `
  type Status {
    code: Int
    message: String   
    lastUpdated: String 
  }

  type CPU {
    model: String
    speed: Int
    times: Times
  }

  type Times {
    user: Int 
    nice: Int 
    sys: Int 
    idle: Int 
    irq: Int 
  }

  type Query {
    status: Status    
    cpuDetails(cpuNumber: Int): CPU
    cpuList: [CPU]
  }
`

const resolvers = {
  Query: {
    status: () => ({ code: 200, msg: "OK" }),
    cpuDetails: (obj, args) => os.cpus()[args.cpuNumber],
    cpuList: () =>  os.cpus()
  },
  Status: {
    code: (obj) => obj.code,
    message: (obj) => obj.msg,
    lastUpdated: () => new Date().toString()
  },
  CPU: {
    model: (cpu) => cpu.model,
    speed: (cpu) => cpu.speed,
    times: (cpu) => cpu.times
  },
  Times: {
    user: (times) => times.user,
    nice: (times) => times.nice,
    sys: (times) => times.sys,
    idle: (times) => times.idle,
    irq: (times) => times.irq
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