import express from 'express';
import Logger from './logger';
import v1 from './routes/v1';

const port = process.env.PORT || 3000;

function startServer() {
  const app = express();

  app.use('/v1', v1);

  app.get('/', (_, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    Logger.info(`Server started on port ${port}`);
  });
}

startServer();
