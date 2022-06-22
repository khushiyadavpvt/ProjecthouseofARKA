import express from "express"

import { CartModel } from '../../database/allmodels'
import { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } from "../user/verifytoken";

import {ValidateCart, ValidateUserId} from '../../Validation/Cart'
const Router = express.Router();



Router.post("/new" , verifyToken, async(req,res) =>{

    try{
        await ValidateCart(req.body);
         const newCart = new CartModel(req.body) ;

         const SavedCart = await newCart.save();

         res.status(201).json(SavedCart);

    }
    catch(error){
        res.status(500).json({Error : error.message})
    }
})



Router.put("/update/:id" ,verifyTokenAndAuthorization , async(req, res) =>{
    
    try{
        await ValidateUserId(req.params.id)
        const updatedCart = await CartModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new: true})

        return res.status(200).json(updatedCart)

    }

catch(error){
    res.status(500).json(error.message)
}
})

Router.delete("/delete/:id" ,verifyTokenAndAuthorization, async(req ,res) =>{
    try{
        await ValidateUserId(req.params.id)
        await CartModel.findByIdAndDelete(req.params.id);

        res.status(200).json({status : "Cart has been deleted"});
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/find/:id" ,verifyTokenAndAuthorization, async(req,res)=>{

    try{
        await ValidateUserId(req.params.id)
        const cart = await CartModel.findOne({userId : req.params.id});
        
        // const { password , ...others } = user._doc

        res.status(200).json(cart)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/" ,verifyTokenAndAdmin, async(req,res)=>{

    try{
        const carts = await CartModel.find();

        res.status(200).json(carts)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

export default Router;