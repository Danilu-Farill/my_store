import express, { Application, Router } from 'express';
import { routerOrder } from './order.routes';
import { routerProduct } from './products.routes';
import { routerUsers } from './users.routes';

function router(app:Application): void {
  const routes: Router = express.Router();
  app.use('/api/', routes);
  routes.use('/users', routerUsers);
  routes.use('/order', routerOrder);
  routes.use('/product', routerProduct);
}

export {router}