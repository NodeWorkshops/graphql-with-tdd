const books = require('../__mockData__')
const axios = jest.genMockFromModule('axios')

axios.get = (url) => Promise.resolve({ data: books })

module.exports = axios