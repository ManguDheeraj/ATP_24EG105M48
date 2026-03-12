//create mini -express(seperate route)
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from '../middlewares/verifytoken.js'
import {config} from 'dotenv'

const {sign}=jwt
export const userApp=exp.Router()
//define user rest api routes

//user login
userApp.post('/auth',async(req,res)=>{
   //get user cred obj from client
   const {email,password}=req.body;
   //verify email
   let user=await UserModel.findOne({email:email})
   //if email not existed
   if(user===null){
      return res.status(404).json({message:"Invalid email"})
   }
   //compare passwords
   let result=await compare(password,user.password)
   //if passwords not matched
   if(result==false){
      return res.status(400).json({message:"Invalid password"})
   }
   //if passwords are matched
     //create token(jsonwebtoken-jwt--jaat)
     const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"})
     //store token as httpOnly cookie
     res.cookie("token",signedToken,{
      httpOnly:true,
      sameSite:"lax",
      secure:false
     })

   //send token in res
   res.status(200).json({message:"login success",payload:user})
})

   //create new user
   userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace plain passord with hashed password
    newUser.password=hashedPassword;
    //create new user document
    const newUserDocument=new UserModel(newUser)
    //save
    await newUserDocument.save()
    //send res
    res.status(201).json({message:"user created"});
   });

//read all users
userApp.get("/users",verifyToken,async(req,res)=>{
   //read all users from db
   let usersList=await UserModel.find();
   //send res
   res.status(200).json({message:"users",payload: usersList})
});

//read a user by object id
userApp.get("/user",verifyToken,async(req,res)=>{
   //read user email from req
   const emailOfUser=req.user?.email;
   console.log(emailOfUser);
   //find user by id
   const userObj=await UserModel.findOne({email:emailOfUser})
   //if user not found
   if(!userObj){
      return res.status(404).json({message:"user not found"})
   }
   //send res
   res.status(200).json({message:"user",payload:userObj})
});

//use find one method to read a document with non object id fields
//use find by id to read document with object id

//find and update user by id
userApp.put("/users/:id",async (req,res)=>{
   //get modified user from req
   const modifiedUser=req.body;
   const uid=req.params.id;
   //find user by id & update
   const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true});
   //send res
   res.status(200).json({message:"user modified",payload:updatedUser})
});

//find and delete user by id
userApp.delete("/users/:id",async (req,res)=>{
   //get id from req params
   const modifiedUser=req.body;
   const uid=req.params.id;
   //find user by id & delete
   let deletedUser=await UserModel.findByIdAndDelete(uid);
   if(!deletedUser){
        return res.status(404).json({message:"user not found"})

   }
   //send res
   res.status(200).json({message:"user deleted",payload:deletedUser})
});

//app.use(verifyToken)--->every req
//userApp.get(path,verifyToken,req-handler)


//add product to cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
   //get product id from url param
   let productId=req.params.pid;
   //get current user details
   const emailOfUser=req.user?.email
   //get user from db
   const user=await UserModel.findOne({enail:emailOfUser}).populate("cart.product")
   //if user is invalid
   if(!user){
      return res.status(404).json({message:"user not found"})
   }
   
   
   //add product to cart
   //before add,first it should check that product is already in the cart
   //if the product is there ,then increment count by 1
   //otherwise add the 
   
   
   
 let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{productId}}})
   console.log(result);
   //if user Invalid
   if(!result){
      return res.status(404).json({message:"user not found"})
   }
   res.status(200).json({message:"product added to cart"});
})