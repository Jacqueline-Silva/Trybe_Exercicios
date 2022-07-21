const employeesService = require("../services/employeesService");

const employeesController = {
  listEmployees: async (_req, res) => {
    const employees = await employeesService.listEmployees();

    res.status(200).json(employees);
  },

  idEmployee: async (req, res) => {
    const { id } = req.params;
    const query = req.query;
    const employee = await employeesService.idEmployee(id, query);
    
    res.status(200).json(employee);
  },
}

module.exports = employeesController;