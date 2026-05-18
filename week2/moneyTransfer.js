//i'll send money 10000 on tomorrow

console.log("Sending money to friend")
let fcond=false

const promiseObj=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(fcond==true){
            fulfilled("10000/- sent ")
        }
        else{
            rejected("sorry Could not transfer")
        }
    },10000)
})

promiseObj
.then((msg)=>console.log(msg))
.catch((emsg)=>console.log(emsg))