 const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
     }
};

//copying the obj
let copyUser={...user}

//changing the values
copyUser.name="Kiran"
copyUser.preferences.theme="Romance"

console.log(user)//original object
console.log(copyUser)//copied object and update name value but the nested obj has not updated