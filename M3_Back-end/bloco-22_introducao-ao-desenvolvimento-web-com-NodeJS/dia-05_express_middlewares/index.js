const express = require('express');
const bodyParser = require('body-parser');

const salesRouter = require('./routers/salesRouter');

const app = express();
app.use(bodyParser.json());

app.use('/sales', salesRouter);

app.listen('3001', () => console.log('Online o/'))