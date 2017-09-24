// ./src/booksSchemaTests.js

const { graphql } = require('graphql');
const schema = require('../schema');

describe('Books schema', () => {
    test('It should respond with a list of all the books', async () => {
        const query = '{ books { name } }'
        const result = await graphql(schema, query)
        expect(result.data.length).toBe(10)
        expect(result.data[0].name).toBe("A Game of Thrones")
        expect(result.data[0].isbn).toBe("978-0553103540")      
        expect(result.data[2].name).toBe("A Storm of Swords")
        expect(result.data[9].isbn).toBe("978-0345537263")            
    });
 });
 
