import {model,Schema} from 'mongoose'



//create a product Schema(productId,productName,price,brand)
const productSchema=new Schema({
    //structure of product schema
    productId:{
        type:Number,
        required:[true,"product ID is mandatory"]
    },
    productName:{
        type:String,
        required:[true,"product name is mandatory"]
    },
    price:{
        type:Number,
        required:[true,"price is mandatory"],
        min:10000,
        max:50000
    },
    brand:{
        type:String,
        required:[true,"Brand is mandatory"]
    }
},{
    versionKey:false,
    timestamps:true
}
)

export const ProductModel=model("product",productSchema)