const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
const r1=cart.filter(itemObj=>itemObj.inStock==true)
console.log("Products in stock:",r1)

const r2=cart.map(itemObj=>itemObj.name)
console.log("Name of the products:",r2)

const r3=cart.map(itemObj=>itemObj.price*itemObj.quantity)
console.log("Price of the items:",r3)

const r4=cart.reduce((acc,itemObj)=>acc+itemObj.price*itemObj.quantity,0)
console.log("Total Proce in the Cart:",r4)

const r5=cart.find(itemObj=>itemObj.name=="Mouse")
console.log("Deteils of Mouse:",r5)

const r6=cart.findIndex(itemObj=>itemObj.name=="Keyboard")
console.log("Index of the Keyboard:",r6)