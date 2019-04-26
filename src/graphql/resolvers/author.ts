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
        async updateAuthor(
            _: any,
            {
                id,
                firstName,
                lastName,
            }: { id: number; firstName?: string; lastName?: string }
        ) {
            let author = await getRepository(Author).findOne(id);
            if (author) {
                if (firstName) {
                    author.firstName = firstName;
                }
                if (lastName) {
                    author.lastName = lastName;
                }
                return author.save();
            } else {
                throw new Error(
                    `Author not found. Are you sure that ID: "${id}" is correct?`
                );
            }
        },
    },
};
