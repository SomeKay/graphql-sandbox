import { mergeResolvers } from 'merge-graphql-schemas';
import author from './resolvers/author';
import book from './resolvers/book';

export default mergeResolvers([author, book]);
