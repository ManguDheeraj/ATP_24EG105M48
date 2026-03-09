let a=[10,20,30,40]
//dynamic insertion 
a.push(50) //inserts at the end of an array

a.unshift(0)///inserts at the start of an array

console.log(a)

a.splice(2,0,25)//inserts element between the array
console.log(a)


//dynamic deletion
let removed=a.shift()//removes the 1st element in an array
console.log(a)

a.pop()//removes the last element 
console.log(a)

a.splice(2,1);
console.log(a)

//dynamic updation
a.splice(2,1,23)
console.log(a)