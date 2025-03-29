import mongoose, {Schema, Model} from "mongoose";
import { IOrder } from "../interface/model.interface";

const orderSchema = new Schema<IOrder, Model<IOrder>>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, },
  products: [{
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'complete'], default: 'pending' },
}, {timestamps: true});

const order: Model<IOrder> = mongoose.model<IOrder>('Order', orderSchema);

export default order;

/*
User crea productos.

User hace un pedido con varios productos (Order).

Order registra el totalAmount calculado automáticamente.

User puede cancelar o confirmar el pedido.//despues

User puede ver su historial de pedidos.//despues

User puede ver los detalles de un pedido.//despues

User → Product (quién lo crea).

User → Order (quién compra).

Order → Product (qué compra).

*/