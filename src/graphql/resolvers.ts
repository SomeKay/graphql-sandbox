import { getRepository } from 'typeorm';
import { Author } from '../data/entities/author';
import { Book } from '../data/entities/book';

export default {
    Query: {
        author(_: any, { id }: any) {
            return getRepository(Author).findOne(id, { relations: ['books'] });
        },
        allAuthors(_: any, args: any) {
            return getRepository(Author).find({ relations: ['books'] });
        },
        book(_: any, { id }: any) {
            return getRepository(Book).findOne(id, { relations: ['author'] });
        },
        allBooks(_: any, args: any) {
            return getRepository(Book).find({ relations: ['author'] });
        },
    },
    Mutation: {
        createAuthor(_: any, { firstName, lastName }: any) {
            return getRepository(Author).save({
                firstName,
                lastName,
            });
        },
        createBook(_: any, { authorId, title }: any) {
            return getRepository(Book).save({ author: authorId, title: title });
        },
    },
};
