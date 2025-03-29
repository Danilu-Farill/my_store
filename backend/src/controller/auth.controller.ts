import {Request, Response } from 'express';

const login = (req: Request, resp: Response): void => {
  try {
    const { username, password } = req.body;
    // if (username) {
    //   throw new Error("usuario ya existe");
    // }
    resp.status(200).json("usuario encontrado");
  } catch (error) {
    resp.status(500).json("error del servidor");
  }
}

export { login };