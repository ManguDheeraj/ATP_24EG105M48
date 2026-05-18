const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

const r1=employees.filter(empObj=>empObj.department=="IT")
console.log("Employees from IT department:",r1)

const r2=employees.map(empObj=>empObj.salary+(empObj.salary/10))
console.log("Net Salary for employees:",r2)

const r3=employees.reduce((acc,empObj)=>acc+empObj.salary,0)
console.log("Total salary payout:",r3)

const r4=employees.find(empObj=>empObj.salary==30000)
console.log("Employees with 30000 salary:",r4)

const r5=employees.findIndex(empObj=>empObj.name=="Neha")
console.log("Index of Neha:",r5)