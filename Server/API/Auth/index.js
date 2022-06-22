import express from 'express';

import {UserModel} from '../../database/allmodels';

import CryptoJS from "crypto-js";

import { ValidateRegister , ValidateLogin } from '../../Validation/Auth'

const Router = express.Router();


Router.post("/register" , async(req, res) =>{
    try{

        await ValidateRegister(req.body.credentials)
        
        await UserModel.findByEmailAndUserName(req.body.credentials);

        const newUser = new UserModel({
            
            username : req.body.credentials.username,
            email : req.body.credentials.email,
            password : CryptoJS.AES.encrypt(req.body.credentials.password, process.env.SECRET_PHASE).toString()
         })

         const savedUser = await newUser.save();

         return res.status(201).json(savedUser);
    }
    catch(err){
        
        return res.status(500).json({Error : err.message});
    }
})

Router.post("/login" ,async(req,res) =>{

    try{

        await ValidateLogin(req.body.credentials)
        
       const user =  await UserModel.findByEmailAndPassword(req.body.credentials);

       const token = user.generatejwttoken();

       const { password , ...others } = user._doc

       return res.status(200).json({...others, token})
    }
    catch(error){
        return res.status(500).json({Error : error.message})
    }
})

export default Router;