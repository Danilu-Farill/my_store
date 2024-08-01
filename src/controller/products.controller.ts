import { Request, Response } from "express";
import { faker } from "@faker-js/faker";
import { IProduct } from "../interface/users.interface";

export const getProduct = async(req: Request, resp: Response): Promise<void> => {
  try {
    const product: IProduct[] = [];
    const { size } = req.query;
    const limit:number = size ? parseInt(size as string, 10): 2; //para llamarlo debe ser con el size http://localhost:4000/users?size=10

    for (let index = 0; index < limit; index++) {
      product.push({
        //id: faker.commerce.isbn(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });   
    }
    resp.json({product}).status(200);
  } catch (error) {
    resp.send('ERROR').status(500);     
  }
};

export const getProductParams = async(req: Request, resp: Response): Promise<void> => {
  try {
    resp.json();    
  } catch (error) {
    resp.send('ERROR').status(500);     
  }
};

export const getProductId = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    resp.json({
      id: id,
      "name": "Small Bronze Chicken",
      "price": 637,
      "image": "https://loremflickr.com/640/480"
    });    
  } catch (error) {
    resp.send('ERROR').status(500);     
  }
};

export const postProduct = async(req: Request, resp: Response): Promise<void> => {
  try {
    const id = req.params;
    const body = req.body;
    resp.json({
      id: id,
      data: body
    });    
  } catch (error) {
    resp.send('ERROR').status(500);     
  }
};

export const patchProduct = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const body = req.body;
    resp.json({
      id: id,
      data: body
    });    
  } catch (error) {
    resp.send('ERROR').status(500);     
  }
};

export const deleteProduct = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    resp.json({
      id: id,
      message: "Borrado con éxito"
    });    
  } catch (error) {
    resp.send('ERROR').status(500);     
  }
};