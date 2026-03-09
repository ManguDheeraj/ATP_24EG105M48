const courses = ["javascript", "react", "node", "mongodb", "express"];

const r1=courses.filter(course=>course.length>5)
console.log("Course name length gretaer thean 5:",r1)

const r2=courses.map(course=>course.toUpperCase())
console.log("Course names to uppercase:",r2)

const r3=courses.reduce((acc,course)=>acc+"|"+course)
console.log("In a single String:",r3)

const r4=courses.find(course=>course=="react")
console.log("Finding course react:",r4)

const r5=courses.findIndex(course=>course=="node")
console.log("Index of node:",r5)