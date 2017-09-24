// ./src/resolvers.js

const resolvers = {
    Query: {
        status: () => "GrpahQL status: OK"
    },
    Book: {
        name: () => 'bob'
    }
}


module.exports = resolvers