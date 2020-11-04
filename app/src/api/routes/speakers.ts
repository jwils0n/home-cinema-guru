import { Router, Request, Response } from 'express';
import speakers from '../../services/speakers';

const route = Router();

export default (app: Router) => {
    app.use('/speakers', route);

    route.get('/', (req: Request, res: Response) => {
        speakers.getAll().then(resp => {
            res.json(resp).status(200);
        });
    });
};
