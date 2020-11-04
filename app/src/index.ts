import express from 'express';
import cors from 'cors';
import sequelize from './sequelize';
import Speaker from './models/Speaker';
import Brand from './models/Brand';

const PORT = 8080;
const HOST = '0.0.0.0';

sequelize.initialize();

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

app.get('/api', (req, res) => {
  Speaker.findAll({
    attributes: ['id', 'name', 'slug', 'price'],
    include: [{
      model: Brand
    }],
    where: { type: 'floorstanding' },
    limit: 10
  }).then(resp => {
    res.send(resp);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);