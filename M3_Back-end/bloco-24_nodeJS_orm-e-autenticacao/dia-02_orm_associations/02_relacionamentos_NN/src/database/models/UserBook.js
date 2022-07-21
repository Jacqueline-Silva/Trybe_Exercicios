module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define('UserBooks',
    {},
    { timestamps: false },
  );

  UserBook.associate = (models) => {
    models.Books.belongsToMany(models.Users, {
      as: 'users',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.Users.belongsToMany(models.Books, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBook;
};