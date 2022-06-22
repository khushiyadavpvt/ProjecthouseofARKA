import express from "express"

import { OrderModel } from '../../database/allmodels'
import { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } from "../user/verifytoken";

import { ValidateOrder } from "../../Validation/Orders";
import { ValidateUserId } from "../../Validation/Cart"
const Router = express.Router();



Router.post("/new" , verifyToken, async(req,res) =>{

    try{
        await ValidateOrder(req.body)
         const newOrder = new OrderModel(req.body) ;

         const SavedOrder = await newOrder.save();

         res.status(201).json(SavedOrder);

    }
    catch(error){
        res.status(500).json({Error : error.message})
    }
})



Router.put("/update/:id" ,verifyTokenAndAdmin , async(req, res) =>{
    
    try{
        await ValidateUserId(req.params.id)
        const updatedOrder = await OrderModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new: true})

        return res.status(200).json(updatedOrder)
    }

    catch(error){
        res.status(500).json(error.message)
    }
})

Router.delete("/delete/:id" ,verifyTokenAndAdmin, async(req ,res) =>{
    try{
        await ValidateUserId(req.params.id)
        await OrderModel.findByIdAndDelete(req.params.id);

        res.status(200).json({status : "Order has been deleted"});
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/find/:id" , verifyTokenAndAuthorization , async(req,res)=>{

    try{ 
        await ValidateUserId(req.params.id)

        const orders = await OrderModel.find({userId : req.params.id});
        
        // const { password , ...others } = user._doc

        res.status(200).json(orders)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/" ,verifyTokenAndAdmin, async(req,res)=>{

    try{
        const orders = await OrderModel.find();

        res.status(200).json(orders)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/income" , async(req,res) =>{
    try{
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

        const income = await OrderModel.aggregate([
            {
                $match : { createdAt : { $gte : previousMonth}}
            },
            {
                $project :{
                    month : { $month : "$createdAt"},
                    sales : "$amount",
                }
            },
            {
                $group :{
                    _id : "$month",
                    total : { $sum : "$sales"},
                }
            }
        ]);

        res.status(200).json(income);
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

export default Router;