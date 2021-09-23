import express from 'express';
import Logger from './logger';

const port = process.env.PORT || 3000;

function startServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    Logger.info(`Server started on port ${port}`);
  });
}

startServer();
