import express from 'express';

import CryptoJS from "crypto-js";

import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from './verifytoken';
import { UserModel } from '../../database/allmodels';

const Router = express.Router();



Router.put("/update/:id" ,verifyTokenAndAuthorization , async(req, res) =>{
    
    try{
        
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
              process.env.SECRET_PHASE
            ).toString();
          }

        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new: true})

        return res.status(200).json(updatedUser)

    }

catch(error){
    res.status(500).json(error.message)
}
})


Router.delete("/delete/:id" ,verifyTokenAndAuthorization, async(req ,res) =>{
    try{

        await UserModel.findByIdAndDelete(req.params.id);

        res.status(200).json({status : "User is has been deleted"});
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/find/:id" , verifyTokenAndAdmin ,async(req,res)=>{

    try{

        const user = await UserModel.findById(req.params.id);
        
        const { password , ...others } = user._doc

        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/" , verifyTokenAndAdmin ,async(req,res)=>{

   
    try{
        const query = req.query.new
        const users = query ? await UserModel.find().sort({_id: -1}).limit(5)  : await UserModel.find();
        
        

        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
})

Router.get("/stats" ,verifyTokenAndAdmin, async(req,res)=>{

    try{ 
        
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    
        const details = await UserModel.aggregate([

            {
                $match : { createdAt : { $gte : lastYear}}
            },
            {
                $project : {
                    month : { $month : "$createdAt"}
                }
            },
            {
                $group : {

                    _id :"$month",
                    total : { $sum : 1}
                }
            }
        ]);
        
        res.status(200).json(details)
    }
   
catch(err){ 
    res.status(500).json({Error : err.message});
}
})

export default Router;