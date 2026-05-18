import { Schema,model } from "mongoose";

//create User Schema(username,password,email,age)
const userSchema=new Schema({
    //structure of user schema
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Minuimum Length of username is 4 cahracters"],
        maxLength:[12,"Maximum Length of username is 6 characters"]
    },
    password:{
        type:String,
        required:[true,"Password is Mandatory"]
    },
    email:{
        type:String,
        required:[true,"Email is Mandatory"],
        unique:[true,"email already exists"]
    },
    age:{
        type:Number
    }
},{
    versionKey:false,
    timestamps:true
})

//Generate USerModel
export const UserModel=model("user",userSchema)