//function decleration
function findSum(a,b){
    let sum=a+b;
    return sum;
}
let x=100;
let y=399;
//function calling
console.log(`${x}+${y}=${findSum(x,y)}`)
console.log("-----------------");

//function expression
let test=function(a,b){               //anonymus finction=means without a name
    let sum=a+b;
    return sum;
}
//function calling
let result=test(25,50);
console.log(result);
console.log(test(10,20))
console.log("-----------------");

//arrow function(to simplify function expression)
let test1=(a,b)=>a+b;
let res=test1(35,35)
console.log(res)
