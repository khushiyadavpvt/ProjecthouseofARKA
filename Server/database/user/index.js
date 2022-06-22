import mongoose from 'mongoose';
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';
const UserSchema = new mongoose.Schema({

    username : {type: String , required : true , unique : true},
    email : { type : String , required : true , unique : true},
    password : { type : String , required : true },
    isAdmin : { type : Boolean , default : false }
},{
    timestamps : true
});


UserSchema.statics.findByEmailAndUserName = async({email, username }) =>{

    const checkUserByEmail = await UserModel.findOne({email});
    
    const checkUserByUserName = await UserModel.findOne({username});

    if(checkUserByEmail || checkUserByUserName) throw new Error("User Already Exists");

    return false;
}

UserSchema.statics.findByEmailAndPassword = async({email , password}) => {

 

    const user = await UserModel.findOne({email});

    if(!user) throw new Error("User Not Found")

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PHASE);

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if(originalPassword !== password){

      throw new Error("Invalid Credentials")
    }

    return user;

}

UserSchema.methods.generatejwttoken = function(){
    return jwt.sign(
        {
            id : this.id.toString(),
            isAdmin : this.isAdmin,
        } 
    , process.env.JWT_SECRET,
    {expiresIn: "3d"}
    )
}

export const UserModel =  mongoose.model("Users", UserSchema);