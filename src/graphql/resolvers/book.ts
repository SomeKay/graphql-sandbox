import { getRepository } from 'typeorm';
import { Author } from '../../data/entities/author';
import { Book } from '../../data/entities/book';

export default {
    Query: {
        book(_: any, { id }: any) {
            return getRepository(Book).findOne(id, { relations: ['authors'] });
        },
        allBooks(_: any, args: any) {
            return getRepository(Book).find({ relations: ['authors'] });
        },
    },
    Mutation: {
        async createBook(
            _: any,
            { authorIds, title }: { authorIds: number[]; title: string }
        ) {
            const authors = await getRepository(Author).findByIds(authorIds);
            return getRepository(Book).save({
                authors: authors,
                title: title,
            });
        },
        async updateBook(_: any, { id, title }: { id: number; title: string }) {
            let book = await getRepository(Book).findOne(id);
            if (book) {
                book.title = title;
                return book.save();
            } else {
                throw new Error(
                    `Book not found. Are you sure that ID: "${id}" is correct?`
                );
            }
        },
    },
};
