import express, { Router } from "express";
import { createUSer, deleteUSer, getUser, getUserId, getUserParams, putUSer } from "../controller/users.controller";

const routerUsers: Router = express.Router();

routerUsers.get('/', getUser);
routerUsers.get('/params', getUserParams);// PRIMERO LOS PARAMETROS, SINO CHOCA CON EL ID
routerUsers.get('/:id', getUserId);
routerUsers.post('/', createUSer);
routerUsers.put('/:id', putUSer);
routerUsers.delete('/:id', deleteUSer);

export {routerUsers};