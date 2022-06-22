import express from "express"

import { ProductModel } from '../../database/allmodels'
import { verifyTokenAndAdmin } from "../user/verifytoken";

const Router = express.Router();



Router.post("/product/new" , verifyTokenAndAdmin , async(req,res) =>{

    try{
         const newProduct = new ProductModel(req.body) ;

         const addedProduct = await newProduct.save();

         res.status(201).json(addedProduct);

    }
    catch(error){
        res.status(500).json({Error : error.message})
    }
})



Router.put("/update/:id" ,verifyTokenAndAdmin , async(req, res) =>{
    
    try{
        
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new: true})

        return res.status(200).json(updatedProduct)

    }

catch(error){
    res.status(500).json(error.message)
}
})

Router.delete("/delete/:id" ,verifyTokenAndAdmin, async(req ,res) =>{
    try{

        await ProductModel.findByIdAndDelete(req.params.id);

        res.status(200).json({status : "Product has been deleted"});
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/find/:id" , async(req,res)=>{

    try{

        const product = await ProductModel.findById(req.params.id);
        
        // const { password , ...others } = user._doc

        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/" , async(req,res)=>{

    try{
        const qNew = req.query.new;
        const qCategory = req.query.category;

        let products;

        if(qNew){
                 products = await ProductModel.find().sort({createdAt: -1}).limit(5) 
        }
        else if(qCategory){

                products = await ProductModel.find({
                    categories : {
                        $in : [qCategory],
                    }
                });
        }
        else{
            products = await ProductModel.find();
        }

        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

export default Router;