const express = require('express');
const bodyParser = require('body-parser');

const salesRouter = require('./routers/salesRouter');
const signupRouter = require('./routers/signupRouter');

const app = express();
app.use(bodyParser.json());

const ERR = 500;

app.use('/sales', salesRouter);
app.use('/signup', signupRouter);

app.use((error, _request, response, _next) => {
  response.status(ERR).json({ error: error.message });
});

app.listen('3001', () => console.log('Online o/'))