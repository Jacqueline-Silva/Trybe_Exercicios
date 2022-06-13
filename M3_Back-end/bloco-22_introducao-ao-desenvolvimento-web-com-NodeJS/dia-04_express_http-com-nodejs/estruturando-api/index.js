const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');
const recipesRouter = require('./recipesRouter');
const drinksRouter = require('./drinksRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

// A partir daqui passa pelo middleware de autenticação!
app.use('/recipes', recipesRouter);
app.use('/drinks', drinksRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});