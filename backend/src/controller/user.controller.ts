import { Request, Response } from 'express';

const createUser = (req: Request, resp: Response): void => {
    try {
      const {username, email, password} = req.body;
      resp.status(201).json("usuario creado con éxito");
    } catch (error) {
      resp.status(500).json("error del servidor");
    }
  }

export {createUser}