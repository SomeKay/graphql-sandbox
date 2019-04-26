import { mergeTypes } from 'merge-graphql-schemas';
import author from './types/author';
import book from './types/book';

export default mergeTypes([author, book], { all: true });
