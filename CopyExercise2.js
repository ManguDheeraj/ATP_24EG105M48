let user = {
 name: "Ravi",
 city: "Hyderabad"
};

//created new obj and copied the user and updated with new property
let updatedUser={...user,age:25}

console.log(user)//original object
console.log(updatedUser)//copied and modified object
