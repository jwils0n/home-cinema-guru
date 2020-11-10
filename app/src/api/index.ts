import { Router } from 'express';
import components from './routes/components';

export default () => {
	const app = Router();
	components(app);

	return app
}