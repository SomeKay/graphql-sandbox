import { gql } from 'apollo-server';

export default gql`
    type Author {
        id: Int!
        firstName: String!
        lastName: String!
        books: [Book]
    }

    type Query {
        author(id: Int!): Author
        allAuthors: [Author]!
    }

    type Mutation {
        createAuthor(firstName: String!, lastName: String!): Author!
        updateAuthor(id: Int!, firstName: String, lastName: String): Author!
    }
`;
