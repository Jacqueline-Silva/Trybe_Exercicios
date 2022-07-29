import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import restaurantRouter from './routers/restaurant.router';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(restaurantRouter);

export default app;