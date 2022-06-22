require("dotenv").config();  

import express from "express";

import cors from "cors";

import helmet from "helmet"

import DBconnection from './database/connection'

import Auth from './API/Auth'
import User from './API/user'
import Product from './API/products'
import Cart from './API/Cart'
import Orders from './API/Orders'
const app = express();

app.use(express.json());  
app.use(express.urlencoded({extended: false}));
app.use(cors()); 
app.use(helmet());
app.use("/auth", Auth);
app.use("/user",User)
app.use("/products",Product)
app.use("/cart",Cart)
app.use("/orders", Orders)
app.get("/" , (req,res) => {
    console.log("Welcome to House of Arka");

    return res.json("Welcome to House of Arka")
})

app.listen( 4000 , ()=>{

    console.log("server is up & running");

    DBconnection()
    .then(() => console.log(`db is connected`))
    .catch((error) => console.log(`DB fail to connect : ${error.message}`))
    
})
