module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Employees',
    underscored: true,
  });

  Employees.associate = (models) => {
    Employees.hasOne(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employees;
};