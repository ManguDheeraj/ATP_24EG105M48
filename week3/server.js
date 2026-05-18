//create express app
import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'
const app=exp()
//add body parser
app.use(exp.json())
//add cookie parserr middleware
app.use(cookieParser())

//forward req to userapp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//ODM-object document mapping driver
//connect to DB server
async function connectDB() {
    try{
        await connect("mongodb://localhost:27017/anuragdb")
        console.log("DB connection is success")
        //start server
        app.listen(4000,()=>console.log("server lsitenng to port 4000..."))
    }
    catch(err){
        console.log("Error in DB connection",err)
    }
}
connectDB()

//error handling middleware
app.use((err,req,res,next)=>{
    //Validation Error
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error occured",error:err.message})
    }
    //Cast Error
    if(err.name==="CastError"){
        return res.status(400).json({message:"error occured",error:err.message})
    }

    //for server side errers
    res.status(500).json({message:"error occured",error:err.message})
})