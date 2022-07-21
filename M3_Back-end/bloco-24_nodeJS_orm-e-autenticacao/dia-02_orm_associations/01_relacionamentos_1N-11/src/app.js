const express = require('express');
const employeesController = require('./controllers/employeesController');

const app = express();
app.use(express.json());

app.get('/employees', employeesController.listEmployees);
app.get('/employees/:id', employeesController.idEmployee);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
});

module.exports = app; 