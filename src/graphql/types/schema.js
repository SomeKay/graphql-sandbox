const { gql } = require('apollo-server');

const typeDefs = gql`
    type Author {
        id: Int!
        firstName: String!
        lastName: String!
        books: [Book]!
    }

    type Book {
        id: Int!
        name: String!
        author: Author!
    }
    type Query {
        author(id: Int!): Author
        allBooks: [Book]!
        allAuthors: [Author]!
        book(id: Int!): Book
    }

    type Mutation {
        createAuthor(firstName: String!, lastName: String!): Author!
        createBook(authorId: Int!, name: String!): Book!
    }
`;

module.exports = typeDefs;
