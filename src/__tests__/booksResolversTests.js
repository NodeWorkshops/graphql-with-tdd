// ./src/__tests__/booksSchemaTests.js
jest.mock('axios')

const { Query, Book } = require('../resolvers');

describe('resolvers - Query.books', () => {
    test('It should respond with the books', async () => {
        const books = await Query.books()
        expect(books.length).toBe(10)
        expect(books[0].name).toBe("A Game of Thrones")
        expect(books[0].isbn).toBe("978-0553103540")      
        expect(books[2].name).toBe("A Storm of Swords")
        expect(books[9].isbn).toBe("978-0345537263")                    
    });
 });

