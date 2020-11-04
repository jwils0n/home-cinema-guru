import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import models from './models';

async function initialize() {
    const dbParams: SequelizeOptions = {
        host: process.env.POSTGRES_HOST,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASS,
        port: parseInt(process.env.POSTGRES_PORT, 10),
        database: process.env.POSTGRES_DB,
        dialect: 'postgres'
    };

    if (process.env.POSTGRES_SSL) {
        dbParams.dialectOptions = {
            ssl: {
                rejectUnauthorized: false
            }
        };
    }

    const sequelize = new Sequelize(dbParams);

    sequelize.addModels(models);

    try {
        await sequelize.authenticate();
        console.log('DB connection success.');
    } catch (error) {
        console.error('DB connection error.', error);
    }
}

export default {
    initialize
}