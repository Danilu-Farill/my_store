import { Request, Response } from "express";
import { IUsers } from "../interface/users.interface";
//SIMULAR INFORMACIÓN YA QUE NO TENGO NADA EN LA BASE DE DATOS 
const usersExample: IUsers[]  = [
  {
    FisrtName: "DaniFer",
    LastName: "Flores",
    Age: 28,
    Email: "dani.fer@example.com"
  },
  {
    FisrtName: "Samantha",
    LastName: "Salinas",
    Age: 30,
    Email: "sam30@example.com"
  },
  {
    FisrtName: "Luna",
    LastName: "López",
    Age: 28,
    Email: "lulo@example.com"
  },
  {
    FisrtName: "Sakura",
    LastName: "Farill",
    Age: 35,
    Email: "sam30@example.com"
  },
  {
    FisrtName: "Fernanda",
    LastName: "Fernandez",
    Age: 12,
    Email: "ferez@example.com"
  },
  {
    FisrtName: "Alejandra",
    LastName: "Altamirano",
    Age: 40,
    Email: "alano@example.com"
  },
  {
    FisrtName: "Romina",
    LastName: "Ramos",
    Age: 10,
    Email: "rora@example.com"
  },
  {
    FisrtName: "Moisés",
    LastName: "Mora",
    Age: 8,
    Email: "momo@example.com"
  }
]

export const getUser = async (req: Request, resp: Response): Promise<void> => {
  try {
    //const { size } = req.query;
    //const limit:number = size ? parseInt(size as string, 10): 2; //para llamarlo debe ser con el size http://localhost:4000/users?size=10
    resp.json(usersExample);
  } catch (error) {
    resp.status(500).json("ERROR");    
  }
};

export const getUserId = async (req: Request, resp: Response): Promise<void> => {
  try {
    const {id } = req.params;
    resp.json({
      id: id,
      FirstName: "Patricia",
      LastName: "Farill",
      Age: 32,
      email: "pricesita_farill@hotmail.com"
    });
  } catch (error) {
    resp.status(500).json("ERROR");    
  }
}; 

export const getUserParams = async (req: Request, resp: Response): Promise<void> => {
  try {
    resp.send("parametros").status(200);
  } catch (error) {
    resp.status(500).json("ERROR");    
  }
};

export const createUSer = async(req: Request, resp: Response): Promise<void> => {
  try {
    const id = req.params;
    const body = req.body;

    resp.status(201).json({
      id: id,
      data: body
    })
  } catch (error) {
    resp.json("ERROR").status(500);  
  }
};

export const putUSer = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const body = req.body;

    resp.status(200).json({
      id: id,
      data: body
    })
  } catch (error) {
    resp.json("ERROR").status(500);   
  }
};

export const deleteUSer = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;

    resp.status(200).json({
      id: id,
    })
  } catch (error) {
    resp.json("ERROR").status(500);  
  }
};