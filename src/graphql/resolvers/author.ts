import { getRepository } from 'typeorm';
import { Author } from '../../data/entities/author';

export default {
    Query: {
        author(_: any, { id }: any) {
            return getRepository(Author).findOne(id, { relations: ['books'] });
        },
        allAuthors(_: any, args: any) {
            return getRepository(Author).find({ relations: ['books'] });
        },
    },
    Mutation: {
        createAuthor(_: any, { firstName, lastName }: any) {
            return getRepository(Author).save({
                firstName,
                lastName,
            });
        },
    },
};
