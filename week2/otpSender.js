console.log("OTP sent Successfully")

let sec=10;
let intervalID=setInterval(()=>{
    sec--;
    console.log(`OTP can resend after ${sec} secs`);
    if(sec==0){
        console.log("Resend OTP");
        clearInterval(intervalID);
    }
},1000)