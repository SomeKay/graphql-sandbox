'use strict';

module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define(
        'Author',
        {
            firstName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            lastName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {}
    );
    Author.associate = function(models) {
        Author.hasMany(models.Book);
    };
    return Author;
};
