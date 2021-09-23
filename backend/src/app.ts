import express from 'express';
import cors from 'cors';
import Logger from './logger';
import { sessionMiddleware } from './middlewares';
import v1 from './routes/v1';

const port = process.env.PORT || 3000;

async function startServer() {
  const app = express();

  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(await sessionMiddleware());

  app.use('/v1', v1);

  app.get('/', (_, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    Logger.info(`Server started on port ${port}`);
  });
}

startServer();
