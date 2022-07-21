module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  return User;
};