const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');

const app = express();
app.use(bodyParser.json());

const PORT = 3001;
const OK = 200;
const ERR = 401;
const ERR_END = 500;

app.use('/user', userRouter);

app.listen(PORT, () => console.log('Online! o/'))