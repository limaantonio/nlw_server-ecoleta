import express from 'express';

import PoinstController from './controllers/PointsController';
import ItemsController from './controllers/ItemsContoller';

const routes = express.Router();
const pointsController = new PoinstController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);





export default routes;
