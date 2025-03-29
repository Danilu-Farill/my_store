import mongoose from "mongoose";

interface IGeneral {
  _id: mongoose.Types.ObjectId;
  createdBy?:string;
  modifiedAt?:Date;
  modifiedBy?:string;
}

export interface IUser2 extends IGeneral {
  username: string;
  password: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface IUser extends IGeneral {
  username: string;
  password: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface IProduct {
  user_id: mongoose.Types.ObjectId,
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;//cantidad disponible
  category: string;
}

export interface IOrder {
  user_id: mongoose.Types.ObjectId;
  products: Array<{
    product_id: mongoose.Types.ObjectId,
    quantity: number,//cantidad comprada
    price: number,//precio unitario
  }>;
  totalAmount: number;// total calculado
  status: 'pending' | 'complete';//POR DEFECTO PENDiente
}

/*
EL USUARIO PARA REGISTRARSE NECESITA:
NOMBRE, EMAIL, CONTRASEÑA Y EL ROL DEL USUARIO que por defecto es

EL PRODUCTO PARA AGREGARLO A LA BASE DE DATOS NECESITA:
NOMBRE DEL PRODUCTO, DESCRIPCIÓN, PRECIO, STOCK, CANTIDAD ES LO MISMO QUE EL STOCK?, IMAGEN, CATEGORÍA ELECTRODOMESTICO, 

EL ORDEN PARA REALIZARLA NECESITA:
1. ID DEL USUARIO QUE HIZO LA ORDEN
2. ID DEL PRODUCTO QUE ESTA COMPRANDO
3. CANTIDAD DE ESE PRODUCTO QUE COMPRA
4. PRECIO DEL PRODUCTO
5. TOTAL DE LA ORDEN
EL STATUS DE LA ORDEN ES POR DEFECTO PENDiente


*/