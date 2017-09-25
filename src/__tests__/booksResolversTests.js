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

//  Resolvers for book are trivial, so we will not implement them and they cannot be tested

//  describe('resolvers - Book', () => {
//     test('It should respond with a book', async () => {
//         const data = {
//             url: "https://anapioficeandfire.com/api/books/1",
//             name: "A Game of Thrones",
//             isbn: "978-0553103540",
//             mediaType: "Hardcover",
//             released: "1996-08-01T00:00:00"
//         }

//         const book = Book.name(data)
//         expect(book.url).toBe(data.url)
//         expect(book.name).toBe(data.name)                    
//         expect(book.isbn).toBe(data.isbn)                    
//         expect(book.mediaType).toBe(data.mediaType)                    
//         expect(book.released).toBe(data.released)                    
//     });
//  });

 
 
