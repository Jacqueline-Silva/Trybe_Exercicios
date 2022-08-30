import express, { Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors'

import middlewareError from './middlewares/errors';
import booksRouter from './routes/booksRoute';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use('/books', booksRouter);

app.use(middlewareError);

app.listen(PORT, () => {
    console.log(`Ouvindo na porta: ${PORT}`);
});