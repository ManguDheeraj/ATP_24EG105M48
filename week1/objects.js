//collection is a pack of data
//array is a pack of elements
//object is a pack of properties

//array(ordered collections)
let marks=[90,89,78,35,63]
let names=['alpha','beta','gaama'];
//iterate(for-of loop)
for(let m of marks){
    console.log(m)
}
console.log("----------------------------------")


//object(unordered collections)
let student={
    sno:100,
    Name:'zoro',
    age:19,
    course:'B.Tech'
}
console.log(student)
console.log(student.sno) //this dot operator is moore prefeeable
console.log(student['sno'])
console.log("----------------------------------")
//iterate an object(for-in loop)
for(let k in student){              //it gives only the key elements
    //console.log(student[k])
    console.log(`${k} is ${student[k]}`)
}


//array of objects
let emps=[{eno:1,name:'zoro'},{eno:2,name:'luffy'},{eno:3,name:'sanji'}]
for(let s of emps){
    for(let v in s){
        console.log(`${v} is ${s[v]}`)
    }
    console.log("-------")
}

//Nested object
let students={
    rno:1,
    fname:"Zoro",
    lname:"Roronoa",
    marks:[90,75,45],
    address:{
        city:"hyd",
        pincode:507111
    },
    getFullName: function(){
        return this.fname+this.lname
    },
    avgMarks: function(){
        let sum=0
        for(let i=0;i<this.marks.length;i++){
            sum=sum+this.marks[i]
        }
        return sum/this.marks.length
    }
}
console.log(students.getFullName())
console.log(students.avgMarks())