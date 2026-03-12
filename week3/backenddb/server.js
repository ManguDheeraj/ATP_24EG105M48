//create express app
import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js';
import cookieParser from 'cookie-parser';
import {productApp} from "./APIs/ProductAPI.js";
import {config} from 'dotenv'

config(); //process.env.PORT


const app=exp()
app.use(exp.json())
//add body parser
//add cookie parser middleware
app.use(cookieParser())

//forward req to UserApp if path starts with /useer-api
app.use("/user-api",userApp);
app.use("/product-api",ProductApp);


//connect to db server
//connect().then().catch()
const port=
async function connectDB() {
    try{
        await connect("process.env.DB_URL");
        console.log("DB Connected")

        //start server
      app.listen(4000,()=>console.log("server on port 4000.."))
    }catch(err){
        console.log("err in DB connection",err);
    }
}
connectDB();

//error handling middleware
//must be at the end
app.use((err,req,res,next)=>{
    console.log(err.name)    
    console.log(err)
     console.log(err.code)
    //vaidation error
    if(err.name=="ValidationError"){
      return res.status(400).json({message:"error occured",error:err.name})
    }
    //cast error
    if(err.name=="CastError"){
        return res.status(400).json({message:"error occured",error:err.name})
    }
    //server side error
    res.status(500).json({message:"error occured",error:"Server Side Error"})
})
//error=>{name,message,callstack}