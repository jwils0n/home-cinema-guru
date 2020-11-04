import { Router } from 'express';
import speakers from './routes/speakers';

export default () => {
	const app = Router();
	speakers(app);

	return app
}