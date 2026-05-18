const temperatures = [32, 35, 28, 40, 38, 30, 42];
const r1=temperatures.filter(temperature=>temperature>35)
console.log("Temperatures above 35:",r1)

const r2=temperatures.map(temperature=>{
    return (temperature*1.8)+32
})
console.log("Temperature in fahrenheit:",r2)

const r3=temperatures.reduce((avgTemp,temperature)=>avgTemp+temperature)
console.log("Average temperature:",r3/temperatures.length)

r4=temperatures.findIndex(temperature=>temperature==28)
console.log("Index of temperature 28:",r4)

r5=temperatures.find(temperature=>temperature>40)
console.log("First temperature above 40:",r5)