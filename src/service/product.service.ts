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

  create(){}
  find(): IProduct[] {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find(item => item.id === id);
  }
  update(){}
  delete(){}
}

export { ProductService }