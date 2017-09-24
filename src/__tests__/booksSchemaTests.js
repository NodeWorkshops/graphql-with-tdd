// ./src/booksSchemaTests.js
jest.mock('axios')

const { graphql } = require('graphql')
const schema = require('../schema')

describe('Books schema', () => {
    test('It should respond with a list of all the books', async () => {
        const query = '{ books { name, isbn } }'
        const result = await graphql(schema, query)
        const books = result.data.books
        expect(books.length).toBe(10)
        expect(books[0].name).toBe("A Game of Thrones")
        expect(books[0].isbn).toBe("978-0553103540")      
        expect(books[2].name).toBe("A Storm of Swords")
        expect(books[9].isbn).toBe("978-0345537263")            
    });
 });
 
