import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';

createConnection().then(() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    server.listen().then(url => console.log('Server is running on ' + url.url));
});
