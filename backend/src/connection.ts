import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

if(!process.env.MONGODB_URI){
  throw new Error('MONGODB_URI environment variable is not set');
}
const MONGO_URI:string = process.env.MONGODB_URI;
const connectMongo = async() =>{
    try {       
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export {connectMongo};

/*
// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
*/