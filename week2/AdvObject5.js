const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const r1=transactions.filter(tranObj=>tranObj.type=="credit")
console.log("Credit Transactions:",r1)

const r2=transactions.map(tranObj=>tranObj.amount)
console.log("Transaction amount:",r2)

const r3=transactions.reduce((acc,tranObj)=>acc+tranObj.amount,0)
console.log("Final Balance:",r3)

const r4=transactions.find(tranObj=>tranObj.type=="debit")
console.log("First Debit Found:",r4)

const r5=transactions.findIndex(tranObj=>tranObj.amount==10000)
console.log("Index of the Amount 10000:",r5)