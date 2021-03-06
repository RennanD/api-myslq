import 'reflect-metadata';
import express from 'express';

import createConnection from './database';

createConnection();

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
});

app.listen(3333, () => {
  console.log("Server is runing.")
});