import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import Knex from 'knex';
const db = require('./lib/database');

const app = express();
app.use(morgan('common'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
const port = process.env.PORT || 3001;

app.get('/', (req:any , res: any) => {
  res.send('Hello world');
});

app.get('/health', (req: any, res: any) => {
  res.send('healthy');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

