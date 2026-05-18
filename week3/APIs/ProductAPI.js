import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'

export const productApp=exp.Router()

//routes

    //create a product
    productApp.post("/products",async(req,res)=>{
        //data from client
        const newProduct=req.body
        //create new product document
        const newProductDocument=new ProductModel(newProduct)
        //save 
        await newProductDocument.save()
        //response
        res.status(201).json({message:"product created"})
    })

    //read all the products
    productApp.get("/products",async(req,res)=>{
        //find all the products
        let productList= await ProductModel.find()
        //response
        res.status(200).json({message:"product list",payload:productList})
    })

    //read product by productId
    productApp.get("/products/:id",async(req,res)=>{
        //gettiing the id 
        let Pid=Number(req.params.id)
        //find the product by productId
        let productObj=await ProductModel.findOne({productId:Pid})
        //if product not found
        if(!productObj){
            return res.status(404).json({message:"product not available"})
        }
        //response
        res.status(201).json({message:"PRoduct found",payload:productObj})
    })

    //update a product by id
    productApp.put("/products/:id",async(req,res)=>{
        //get the product id
        let pId=Number(req.params.id)
        //getting the updated values
        let updatedproduct=req.body
        //updating the valuse
        let productObj=await ProductModel.updateOne({productId:pId},{$set:{...updatedproduct}})
        //if product not found
        if(!productObj.matchedCount){
            return res.status(404).json({message:"product not available"})
        }
        //response
        res.status(200).json({message:"product details updated"})
    })

    //deleting a product by id
    productApp.delete("/products/:id",async(req,res)=>{
        //finsing the product id
        let pId=Number(req.params.id)
        //finding and deleting the product
       let delProduct=await ProductModel.findOneAndDelete({productId:pId})
       //if product not found
       if(!delProduct){
        return res.status(404).json({message:"Product not available"})
       }
       //response
       res.status(200).json({message:"product deleted",payload:delProduct})
    })