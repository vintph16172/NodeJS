// Bước 1: include thư viện http
import express from 'express';
import mongoose from 'mongoose';
import homeRoute from './routes/home'
import productRoute from "./routes/products"
import categoryRoute from './routes/category'
import { checkAuth } from './middlewares/checkAuth';
const app = express();

// const homeRoute = require('./routes/home');


app.use(express.json())
app.use(homeRoute);
app.use("/api",checkAuth,productRoute);
app.use("/api",categoryRoute)

mongoose.connect('mongodb://localhost:27017/nodeJS');

// Bước 3: lắng nghe cổng thực thi
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});