const resolvers = {
    Query: {
        async author(_, { id }, { models }) {
            return models.Author.findById(id);
        },
        async allAuthors(_, args, { models }) {
            return models.Author.findAll();
        },
        async book(_, { id }, { models }) {
            return models.Book.findById(id);
        },
        async book(_, { id }, { models }) {
            return models.Book.findById(id);
        },
    },
    Mutation: {
        async createAuthor(_, { firstName, lastName }, { models }) {
            return models.Author.create({
                firstName,
                lastName,
            });
        },
        async createBook(_, { authorId, name }, { models }) {
            return models.Book.create(authorId, name);
        },
    },
    Author: {
        async books(author) {
            return author.getBooks();
        },
    },
    Book: {
        async author(book) {
            return book.getAuthor();
        },
    },
};

module.exports = resolvers;
