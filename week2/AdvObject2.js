const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

const r1=students.filter(studObj=>studObj.marks>=40)
console.log("Student marks greater than 40:",r1)

const r2=students.map(studObj=>{
  if(studObj.marks>=90){
    studObj.grade='A'
  }
  else if(studObj.marks>=75){
    studObj.grade='B'
  }
  else  if(studObj.marks>=60){
    studObj.grade='C'
  }
  else{
    studObj.grade='D'
  }
})
console.log("Updated with Grades:",students)

const r3=students.reduce((acc,studObj)=>acc+studObj.marks,0)
console.log("Avaerage Marks:",r3/students.length)

const r4=students.find(studObj=>studObj.marks===92)
console.log("Student who scored 92 marks:",r4);

const r5=students.findIndex(studObj=>studObj.name==="Kiran")
console.log("Index of Kiran:",r5)