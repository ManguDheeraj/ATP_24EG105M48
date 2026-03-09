//create http server 
import exp from 'express';
const app=exp();

//use body parser middleware
app.use(exp.json())

//express application module contains http server internally

//set a port number
const port=3000;
//assign port number to http server
app.listen(port,()=>console.log(`server listening to port ${port}...`))
// to check whether server is created we use node server.js command

//test data(replace this test data with db)
let products=[]
 


//create product api(application programmer interface)(REST API - REpresentational State Transfer)
     // route to handle GET request of client(http://localhost:3000/users)
     app.get('/products',(req,res)=>{
        //read all users and send res
        res.json({message:"all products",payload:products})
     })

     //route to read product by brand
     app.get("/products/:brand",(req,res)=>{
        //get product if from url param
        let brandOfUrl=Number(req.params.brand)
        //find product
        let product=products.find(productObj=>productObj.brand==brandOfUrl)
        //if product not found
        if(product==undefined){
            return res.json({message:"product not found"})
        }
        //send res
        res.json({message:"a product",payload:product})

     })


    // route to handle POST request of client
        app.post('/products',(req,res)=>{
            //get NEW product from client
            const newProduct=req.body
            //push product into users
            products.push(newProduct)
            //send res
            res.json({message:"Product created"})
        })


    // route to handle PUT request of client
           app.put('/products',(req,res)=>{
            //get modified product from client{}
            let modifiedProduct=req.body;
            //get index of existing product in users array
            let index=products.findIndex(productObj=>productObj.pid==modifiedProduct.pid)
            //if product not found
            if(index==-1){
                return res.json({message:"product not found"})
            }
            //update product with index
            products.splice(index,1,modifiedProduct)
            //send res
            res.json({message:"product updated"})
           })
    // route to handle DELETE request of client
      app.delete('/products/:pid',(req,res)=>{
        //get id of product from url parameter
        let pidOfUrl= Number(req.params.pid); //{id:'1'}
        //find index of product
        let index=products.findIndex(productObj=>productObj.pid==pidOfUrl)
        //if product not found
        if(index==-1){
            return res.json({message:"product not found to delete"})
        }
        //delete product  by index
        products.splice(index,1)
        //send res
        res.json({message:"product removed"})
    })



