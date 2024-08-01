import { Request, Response } from "express";
import { IOrder } from "../interface/users.interface";
//SIMULAR INFORMACIÓN YA QUE NO TENGO NADA EN LA BASE DE DATOS 

const order: IOrder[] = [
  {
    number: 1,
    pedido: "GDFC-8844"
  },
  {
    number: 2,
    pedido: "GTAD-2468"
  }

]

export const getOrder = async (req: Request, resp: Response): Promise<void> => {
  try {
    // const { size } = req.query;
    // const limit:number = size ? parseInt(size as string, 10): 2; //para llamarlo debe ser con el size http://localhost:4000/users?size=10
    // const limit:any = size || 2;
    resp.json(order).status(200);
  } catch (error) {
    resp.status(500).json("ERROR");    
  }
};

export const getOrderId = async (req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    resp.json({
      id: id,
      number: 1,
      pedido: "CDFR-12345678"
    }).status(200);
  } catch (error) {
    resp.status(500).json("ERROR");    
  }
}; 

export const getOrderParams = async (req: Request, resp: Response): Promise<void> => {
  try {
    resp.send("parametros");
  } catch (error) {
    resp.status(500).json("ERROR");    
  }
};

export const postOrder = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const body: IOrder[] = req.body;//SIN DESTRUCTURAR PORQUE VOY A NECESITAR TODO LO QUE HAY EN EL BODY
    resp.status(201).json({
      id: id,
      message: 'created',
      data: body
    })
  } catch (error) {
    resp.status(500).json("ERROR")
  }
}

//DIFERENCIA ENTRE PUT Y PATCH: EN PUT DEBES MANDAR TODOS LOS CAMPOS AUNQUE SOLO ACTUALICES UNO, CON PATCH SOLO MANDAS EL QUE VAS A ACTUALIZAR
export const patchOrder = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const body = req.body;
    resp.status(200).json({
      id,
      message: "Realizado con éxito",
      data: body
    });
  } catch (error) {
    resp.status(500).json("ERROR");
  }
};

export const deleteOrder = async(req: Request, resp: Response): Promise<void> => {
  try {
    const { id } = req.params;
    resp.status(200).json({
      id: id,
      message: "Eliminado con éxito"
    });
  } catch (error) {
    resp.status(500).json("ERROR");
  }
}