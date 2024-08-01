import express, { Router } from "express";
import { getOrder, getOrderParams, getOrderId, postOrder, patchOrder, deleteOrder } from "../controller/order.controller";

const routerOrder: Router = express.Router();

routerOrder.get('/', getOrder);
routerOrder.get('/params', getOrderParams);// PRIMERO LOS PARAMETROS, SINO CHOCA CON EL ID
routerOrder.get('/:id', getOrderId);
routerOrder.post('/', postOrder);
routerOrder.patch('/', patchOrder);
routerOrder.delete('/', deleteOrder);

export {routerOrder};