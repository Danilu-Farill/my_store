import express, { Application, Request, Response } from "express";
import { router } from './routes/index.routes';
// import {router} from './routes/routes';
// import { routerUsers } from './routes/users.routes'
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();
const port:number = parseInt(process.env.PORT || "4001");

app.use(express.json());
// app.use('/store', router);
// app.use('/users', routerUsers);
router(app);


app.get("/", (req: Request, resp: Response) => {
  resp.send("localhost 4000")
});

// app.get("/product", (req:Request, resp: Response) => {
//   resp.json({
//     "name": "TV",
//     "price": 1000,
//   });
// });

app.listen(port, (): void => {
  console.log('server active in port', port); 
});
