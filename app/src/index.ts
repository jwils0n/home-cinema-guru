import express from 'express';
import cors from 'cors';
import { Client, ClientConfig } from 'pg';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const dbParams: ClientConfig = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASS,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  database: process.env.POSTGRES_DB
}

if (process.env.POSTGRES_SSL) {
  dbParams.ssl = { rejectUnauthorized: false };
}

const dbClient = new Client(dbParams);
dbClient.connect();

// App
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

app.get('/api', (req, res) => {
  dbClient.query('SELECT * FROM speakers', (err, dbres) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(dbres.rows);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);