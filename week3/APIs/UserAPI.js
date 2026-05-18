//cereate a mini-express application(Seperate route)
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {compare, hash} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from './middlewares/verifyToken.js'
const {sign}=jwt

export const userApp=exp.Router()

//define user REST API routes

    //user login
    userApp.post("/auth",async(req,res)=>{
        //get uesr obj from client
        const {email,password}=req.body
        //verify email
        let user=await UserModel.findOne({email:email})
        //if user not found
        if(user===null){
            return res.status(400).json({message:"Inavlid Email"})
        }
        //chaeck password
        let result=await compare(password,user.password)
        if(result===false){
            return res.status(400).json({message:"Incorrect password"})
        }
        //if passwords are maatched
        //create token (jsonWebToken  -JWT)
        const signedToken=sign({email:user.email},"abcdef",{expiresIn:"1h"})
        //share token as httponly cookie
        res.cookie("token",signedToken,{
            httpOnly:true,
            sameSite:"lax",
            secure:false
        })
        //response
        res.status(200).json({message:"Login Success",payload:user})
         })


    //to create user
    userApp.post("/users",async(req,res)=>{
        //get new user obj from req
        const newUser=req.body
        //hash the password
       const hashedPassword= await hash(newUser.password,10)
        //reepalce the password eith hash password
        newUser.password=hashedPassword
        //create new user document
        const newUserDocument=new UserModel(newUser)
        //save
        await newUserDocument.save()
        //send res
        res.status(201).json({message:"User Created"})
    })

    //read all users
     //create new user(protected route)
    //route level middleware
    userApp.get("/users",verifyToken,async(req,res)=>{
        //read all users form db
        let usersList=await UserModel.find()
        //response
        res.status(200).json({message:"users",payload:usersList})
    })

    //read user by object id
    userApp.get("/users/:id",verifyToken,async(req,res)=>{
        //read objext id
        const uid=req.params.id
        //find the user by id
        const userObj=await UserModel.findById(uid)
        //if user not found
        if(!userObj){
            return res.status(404).json({message:"User not found"})
        }
        //send res
        res.status(200).json({message:"user",payload:userObj})
    })
    
    //use findOne to read the non object id
    //use findById to read documents with objId

    //update a user by id
    userApp.put("/users/:id",verifyToken,async(req,res)=>{
        //get modifird user form the client
        const modifiedUser=req.body
        const uid=req.params.id
        //find and updatae the document
        const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
        //send response
        res.status(200).json({message:"user",payload:updatedUser})
    })

    //find user by id and delete
    userApp.delete("/users/:id",async(req,res)=>{
        //find the id and delete the id
        const uid=req.params.id
       const delUser= await UserModel.findByIdAndDelete(uid)
       if(!delUser){
        return res.status(404).json({message:"User not found"})
       }
        //send response
        res.status(200).json({message:"User Deleted",payload:delUser})
    })