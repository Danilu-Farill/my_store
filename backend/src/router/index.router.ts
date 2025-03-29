//función para llamar todos los router
import { routerUser } from "./user.router";
import express, { Application, Router } from "express";

function router(app:Application): void {
  const routerApp: Router = express.Router();
  app.use('api', routerApp);
  routerApp.use('/user', routerUser);  
}

export { router };