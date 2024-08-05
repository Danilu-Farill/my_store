import { faker } from "@faker-js/faker";
import { IProduct } from "../interface/users.interface";

class ProductService {
  private products: IProduct[];
  constructor() {
    this.products = [];    
    this.generate();    
  }

  generate(){
    const limit:number = 8; 
    for (let index: number = 0; index < limit; index++) {
      this.products.push({
        id: parseInt(faker.datatype.uuid(), 10),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });   
    }
  }

  async create(data: Omit<IProduct, "id">): Promise<IProduct>{//omit pra poder omitir algo que no necesite de mi interface
    const newProduct: IProduct = {
      id: parseInt(faker.datatype.uuid(), 10),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find(): Promise<IProduct[]> {//simular un retraso en la respuesta
    return new Promise<IProduct[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 6000);
    })
  }
  async findOne(id: number): Promise<IProduct | undefined> {
    return this.products.find(item => item.id === id);
  }
  async update(id: number, changes: Partial<IProduct>): Promise<IProduct>{//simular un error al no encontrar un producto para actualizar|PARTIAL ME PERMITE TRAER MI INTERFACE Y QUE LAS PROPIEDADES SEAN OPCIONALES
    const findId = this.products.findIndex(item => item.id === id);
    if(findId === -1){
      throw new Error("Product not found");
    }
    const product = this.products[findId];
    this.products[findId] = {
      ...product,
      ...changes
    };
    return this.products[findId];
  }
  async delete(id: number): Promise<IProduct[]> {
    const findId: number =  this.products.findIndex(item => item.id === id);//el tipo esta implicito no es necesario poner
    if(findId === -1){
      throw new Error("Product not found");
    }
    const indexDelete =  this.products.splice(findId, 1);
    return indexDelete;
  }
}

export { ProductService }