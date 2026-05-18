//creating HTTP server
import exp from 'express'
const app=exp()  //internally contains the http server

//use body parser middleware
app.use(exp.json())  //to extract the data from the client to server

//set a port number
const port=3000
//assign port number to http server
app.listen(port,()=>console.log(`server lsitenng to port ${port}...`))

//test data
let users=[]

//create an USER API(REST API) RE-representational S-state T-transfer
 
    //Route to handle GET req of client(http://localhost:3000/users)
    app.get('/users',(req,res)=>{
        res.json({message:"all user",payload:users})
    })



    //Route to handle POSt req of client
    app.post('/users',(req,res)=>{
        //get new user from client
        let newUser=req.body
        //push user into user
        users.push(newUser)
        //response
        res.json({message:"user creted"})
    })



    //Route to handle PUT req of client
    app.put('/users',(req,res)=>{
        //get modified user from client
        let updatedUser=req.body
        //get index of existing user in users array
        let index=users.findIndex(userObj=>userObj.id===updatedUser.id)
        //if user not found
        if(index==-1){
            return res.json({message:"User not found"})
        }
        //update the user 
        users.splice(index,1,updatedUser)
        //response 
        res.json({message:"User Updated"})
    })



    //Route to handle DELETE req of client
    app.delete('/users/:id',(req,res)=>{
        //get id of user from url parameter
        let idOfUrl=Number(req.params.id)
        //find index of the id
        let index=users.findIndex(userObj=>userObj.id==idOfUrl)
        //if user not found
        if(index===-1){
            return res.json({message:"User not exists"})
        }
        //delete user by index
        users.splice(index,1)
        //response
        res.json({message:"User deleted"})

    })

    //route to handle GET req by id
     app.get('/users/:id',(req,res)=>{
        //get id of user from url parameter
        let idUrl=Number(req.params.id)
        //fins index of the id
        let index=users.findIndex(userObj=>userObj.id==idUrl)
        //if id not found
        if(index===-1){
            return res.json({message:"Id not found"})
        }
        //response
        res.json({message:"user found",payload:users[index]})
     })


//Product API
let products=[]
     //read all products
     app.get('/products',(req,res)=>{
        //response
        res.json({message:"all products",payload:products})
     })
     
     //create a new Product ({productId,name,brand,price})
     app.post('/products',(req,res)=>{
        //extract data from client
        let newProduct=req.body
        //push it into the array
        products.push(newProduct)
        //response
        res.json({message:"Product added"})
     })


     //read all product by brand
     let count=0
     app.get('/products/:brand',(req,res)=>{
        //getting the product brand from url
        let brandUrl=req.params.brand
        //finding the brands and pushing in brandProducts
        for(let item of products){
            if(item.brand===brandUrl){
                res.json({message:"brand product",payload:item})
                count++
            }
        }
        //if no brands are available
        if(count===0){
            res.json({message:"No brand products are available"})
        }
     })

     //update an existing product
     app.put('/products',(req,res)=>{
        //accessing the data
        let updatedProduct=req.body
        //finding the index of the body
        let index=products.findIndex(productObj=>productObj.productId===updatedProduct.productId)
        //if item not found
        if(index==-1){
            return res.json({message:"Item not found"})
        }
        //if item found
        products.splice(index,1,updatedProduct)
        //response
        res.json({message:"Product uppdated successfully"})

     })

     //deleting the existing product  by product id
     app.delete('/products/:productId',(req,res)=>{
        //getting the id
        let idOfProduct=Number(req.params.productId)
        //finding the index of the product
        let index=products.findIndex(productObj=>productObj.productId===idOfProduct)
        //if product not found
        if(index===-1){
            return res.json({message:"product not found"})
        }
        //if product found
        products.splice(index,1)
        //response
        res.json({message:"Product deleted successfully"})
     })
     
     
