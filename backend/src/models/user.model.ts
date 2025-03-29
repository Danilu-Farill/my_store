import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '../interface/model.interface';

const schemaUser = new Schema<IUser, Model<IUser>>({
  username: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 }, // match: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/},
  email: { type: String, unique: true },
  role:{ type: String, enum: ['admin', 'customer'], default: 'customer'},
}, {timestamps: true});//grega automáticamente los campos createdAt y updatedAt

const user: Model<IUser> = mongoose.model<IUser>('User', schemaUser);

export default user;