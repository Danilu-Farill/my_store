import express, { Router } from 'express';
import { deleteProduct, getProduct, getProductId, patchProduct, postProduct } from '../controller/products.controller';

const routerProduct: Router = express.Router();

routerProduct.get('/', getProduct);
routerProduct.get('/:id', getProductId);
routerProduct.post('/', postProduct);
routerProduct.patch('/:id', patchProduct);
routerProduct.delete('/:id', deleteProduct);

export { routerProduct };