import { Router, Request, Response } from 'express';
import brands from '../../services/brands';
import speakers from '../../services/speakers';

const route = Router();

export default (app: Router) => {
    app.use('/components', route);

    route.get('/brands', (req: Request, res: Response) => {
        brands.getAll().then(resp => {
            res.json(resp).status(200);
        });
    });

    route.get('/speakers', (req: Request, res: Response) => {
        speakers.getAll().then(resp => {
            res.json(resp).status(200);
        });
    });
};
