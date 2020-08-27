const axios = require("axios");

const resolvers = {
  Query: {
    status: () => "GraphQL status: OK",
    books: () =>
      axios
        .get("https://anapioficeandfire.com/api/books")
        .then((res) => res.data),
  },
};

module.exports = resolvers;
