import { gql } from 'apollo-server';

export default gql`
    type Author {
        id: Int!
        firstName: String!
        lastName: String!
        books: [Book]
    }

    type Book {
        id: Int!
        title: String!
        author: Author
    }

    type Query {
        author(id: Int!): Author
        allAuthors: [Author]!
        book(id: Int!): Book
        allBooks: [Book]!
    }

    type Mutation {
        createAuthor(firstName: String!, lastName: String!): Author!
        createBook(authorId: Int!, title: String!): Book!
    }
`;
