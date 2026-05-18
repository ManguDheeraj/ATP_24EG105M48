### steps to create backend with DB

1.Generate package.json
2.create eexpress server
3.Install mongoose and connect to MongoDB sserver
        REST API --MongoDB native driver->DB server
        REST API --Mongoose ODM tool->DB server

4.Build USER REST API
    ->create user
    ->read all users
    ->read a user by id
    ->update a user by id
    ->delete a user by id

5.create Schema and model of the resource(User)
    Schema ->Which fields are required for the backend

6.Create user APIs and define routes


Status Codes
200 -- success
201 -- created
400 -- bad request
401 -- Unauthorised
404 -- not found
500 -- server error

->we can hash the passsword with bcryptjs

### User Authentication(Login)
->Submit credentials and get token
->types of attack
    -CSRF
    -XSS


->Any API contains these routes
        -Public routes(by anyone)
        -protected routes(By authenticated users only)
->By default every route is a public route
->SameSite type lax means relaxed
->To access cookies properties of request object we need cookie parser middleware.Otherwise req.cookies is undefined


task 
1.read users and products
2.read user and product by id
3.update user and product
4.delete user and product
make the above operations as protected 