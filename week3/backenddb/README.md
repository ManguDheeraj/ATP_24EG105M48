1. Generate package.json
2. create express server
3. install mongoose and connect to mongodb server
  rest api-- mongodb native driver---db server
  rest api-- mongoose odm tool---db server
 object document mapping-odm
4. build user rest api
     -create user
     -read all users
     -update user by id
     -delete user by id
5. create schema and model of the resource (user)
6. create userapi and define routes
 
--->handling unavailable resources
--->valiadators during update
--->Hashing password(bcryptjs)
--->unique fields
--->refined version of error handling middleware

//User created == "User  created" -->false
//Status Codes
//200 - success
//201 - created
//400 - bad request
//401 - Unauthorised
//404 - Not found
//500 - Server error


### user authentication(login)
  -submit credentials and get token
    -public routes (by anyone)
    -protected routes (by authenticated users only) 

popular attacks
xss
csrf(cross right scripting effect)


lax-relaxed restriction-b/w strict and none

//to access cookies properties of request object we need cookie parser middle ware.
//otherwise req.cookie is undefined

make the following routes protected
  -read users and products
  -read user & product by id
  -update user & product
  -delete user & product

nested document
 ref document