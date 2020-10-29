const express = require('express');
const { Client } = require('pg');

// Constants
const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

const dbParams = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASS,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB
}

if (process.env.POSTGRES_SSL) {
  dbParams.ssl = { rejectUnauthorized: false };
}

const dbClient = new Client(dbParams);
dbClient.connect();

// App
const app = express();
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