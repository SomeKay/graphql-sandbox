'use strict';

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define(
        'Book',
        {
            authorId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {}
    );
    Book.associate = function(models) {
        Book.belongsTo(models.Author, { foreignKey: 'authorId' });
    };
    return Book;
};
