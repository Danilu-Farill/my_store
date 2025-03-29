import mongoose,{ Model, Schema } from "mongoose";
import { IProduct } from "../interface/model.interface";

const productSchema = new Schema<IProduct>({
  user_id:{type: Schema.Types.ObjectId, ref: "User", required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
},{timestamps:true});

const Product: Model<IProduct> = mongoose.model<IProduct>("Product", productSchema);

export default Product;