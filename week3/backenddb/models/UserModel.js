import { Schema,Types,model} from "mongoose";

//create cart schema{product,count}
const cartSchema =new Schema({
    product:{
     type:Types.ObjectId,
     ref:"product" //name of product model
    },
    count:{
        type:Number,
        default:1
    }
})
//create user schema(useranme,password,email,age)
const userSchema=new Schema({
    //structure of user schema
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"min length of username is 4 chars"],
        maxLength:[6,"username size must not exceed 6 chars"]
    },
    password:{
        type:String,
        required:[true,"password required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already existed"]
    },
    age:{
        type:Number
    },
    cart:[cartSchema], //{product:"",

},
{
 versionKey:false,
 timestamps:true,
} , );
//generate usermodel
export const UserModel=model("user",userSchema) ;
