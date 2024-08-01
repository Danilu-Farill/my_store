import { Response, Request } from "express";

const getStore = async(req:Request, resp:Response): Promise<void> => {
  try {   
    resp.json([{
      "name": "TV",
      "price": 1000
    },
    {
      "name": "TV",
      "price": 2000
    },
    {
      "name": "phone",
      "price": 3000
    },
    {
      "name": "Laptop",
      "price": 4000
    }
    ]);   
  } catch (error) {
    resp.status(500).json("ERROR");  
  }
};

const getIdStore = async(req:Request, resp: Response): Promise<void> => {
  try {
    const {id} = req.params;
    resp.json({
      "id":id,
      "name": "TV",
      "price": 1000
    });
  } catch (error) {
    resp.json("ERROR").status(500);
  }
};

const getParams = async(req:Request, resp:Response): Promise<void> => {
  try {
    const { id, email} = req.params
    resp.json({
      id: id,
      email: email
    })
  } catch (error) {
    resp.json("ERROR").status(500);
  }
}

const postStore = async(req:Request, resp: Response): Promise<void> => {
  try {
    resp.json();
  } catch (error) {
    resp.json("ERROR").status(500);
  }
};

const putStore = async(req:Request, resp: Response): Promise<void> => {
  try {
    resp.json();
  } catch (error) {
    resp.json("ERROR").status(500);
  }
};

const deleteStore = async(req:Request, resp: Response): Promise<void> => {
  try {
    resp.json();
  } catch (error) {
    resp.json("ERROR").status(500);
  }
};

export {getStore, getIdStore, getParams, postStore, putStore, deleteStore};