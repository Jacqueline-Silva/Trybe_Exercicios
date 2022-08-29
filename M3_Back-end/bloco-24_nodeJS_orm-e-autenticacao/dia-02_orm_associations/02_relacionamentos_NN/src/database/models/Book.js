module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Books', {
    bookId: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    numberPages: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'books',
    underscored: true,
  });

  return Book;
};