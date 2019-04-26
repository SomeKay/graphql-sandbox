import { gql } from 'apollo-server';

export default gql`
    type Book {
        id: Int!
        title: String!
        authors: [Author]
    }

    type Query {
        book(id: Int!): Book
        allBooks: [Book]!
    }

    type Mutation {
        createBook(authorIds: [Int!]!, title: String!): Book!
        updateBook(id: Int!, title: String!): Book!
    }
`;
