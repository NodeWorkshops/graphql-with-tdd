const express = require('express')
const bodyparser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const app = require('./app')

const PORT = 3000



app.listen(PORT, () => console.log(`Express running on ${PORT}`))