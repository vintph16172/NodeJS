// Bước 1: include thư viện http
import express from 'express';
import mongoose from 'mongoose';
import homeRoute from './routes/home'
import productRoute from "./routes/products"
import categoryRoute from './routes/category'
import { checkAuth } from './middlewares/checkAuth';
import authRouter from './routes/auth';
import cors from 'cors'
import cartRoute from './routes/cart';
import detailCartRoute from './routes/detailCart';
import couponRoute from './routes/coupon'
import commentRoute from './routes/comment'


const app = express();

// const homeRoute = require('./routes/home');


app.use(express.json())
app.use(cors())
// app.all('/', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()  
// });
app.use(homeRoute);
app.use("/api", checkAuth, productRoute);
app.use("/api", categoryRoute)
app.use("/api", authRouter)
app.use("/api",cartRoute)
app.use("/api",detailCartRoute)
app.use("/api",couponRoute)
app.use("/api",commentRoute)

mongoose.connect('mongodb://localhost:27017/nodeJS');

// Bước 3: lắng nghe cổng thực thi

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Server is running on port 8000");
});