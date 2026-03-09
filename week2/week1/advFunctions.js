//A function can store in a variable
//a function can return another function
//can recevie a function as an argument
function test(){
    return function(){
        return 100
    }
    
}
let res=test()
console.log(res())
console.log("------------------------------")//returning another function in a function
let createGame=function(playerName){
    return function(level){
        console.log(`Hello ${playerName} ,you are at level ${level}`)
    }
}
let level=createGame("Hakai");
level(1)
level(2)
level(3)
level(4);
console.log("------------------------------")
let createGame1=function(level,playerName){
    console.log(`Hello ${playerName} ,you are at level ${level}`)
}
createGame1(1,'helloo')
console.log("------------------------------")//using function as a arguments
let test1=function(a){
    console.log(a())
}
test1(function(){
    console.log("hellooooo")
})
console.log("------------------------------")
let makePayment=function(amount,modeOfPayment){
    console.log(`Amount ${amount} is processing`)
    modeOfPayment()
}
let UPIPayment=function(){
    console.log("UPI payment done");
}
let cardPayment=function(){
    console.log("card payment done");
}
makePayment(1000,UPIPayment)
makePayment(19999,cardPayment)
console.log("------------------------------")
//closure property
let sum=function(x){
    return function(y){
        return x+y;
    }
}
let x=sum(10)
console.log(x(20))