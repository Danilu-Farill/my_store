export interface IProduct {
    id: number | null,
    name: string,
    price: number,
    image: string,
}

export interface IUsers{
    FisrtName: string,
    LastName: string,
    Age: number,
    Email: string
}

export interface IOrder{
    number: number,
    pedido: string
}