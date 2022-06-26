// Bước 1: include thư viện http
import express from 'express';
import mongoose from 'mongoose';
import homeRoute from '../routes/home'
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
const path = require("path");
const logger = require("morgan");

// const homeRoute = require('./routes/home');


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

const uri = "mongodb+srv://vipro292002:vipro292002@cluster0.sa6qa6v.mongodb.net/test?retryWrites=true&w=majority";
// mongoose.connect('mongodb://localhost:27017/nodeJS');
mongoose.connect(uri);

// Bước 3: lắng nghe cổng thực thi


app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Server is running on port 8000");
});