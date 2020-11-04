import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import sequelize from './sequelize';
import routes from './api'

const PORT = 8080;
const HOST = '0.0.0.0';

sequelize.initialize();

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

app.use(helmet());
app.use(bodyParser.json());
app.use('/api', routes());

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
