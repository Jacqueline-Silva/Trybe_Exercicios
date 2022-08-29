const { Employees, Address } = require("../database/models");

const employeesService = {
  listEmployees: async () => {
    const employees = await Employees.findAll({
      include: { model: Address, as: 'addresses' },
    });
    return employees;
  },

  idEmployee: async (id, query) => {
    const employee = await Employees.findOne({
      where: { id },
      // include: [{ model: Address, as: 'addresses' }],
    });

    if (!employee) {
      const e = new Error('Funcionário não encontrado');
      e.name = 'NotFoundError';
      throw e;
    };

    if (query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return { employee, addresses };
    };

    return employee;
  },

};

module.exports = employeesService;