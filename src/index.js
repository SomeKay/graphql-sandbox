const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/types/schema');
const resolvers = require('./graphql/types/resolvers');
const models = require('./data/models');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models },
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
