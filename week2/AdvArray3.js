const marks = [78, 92, 35, 88, 40, 67];

const r1=marks.filter(mark=>mark>=40)
console.log("Marks greater thean 40:",r1)

const r2=marks.map(mark=>mark+5)
console.log("After adding 5 grace marks:",r2)

const r3=marks.reduce((acc,mark)=>acc>mark ? acc:mark)
console.log("Highest Marks:",r3)

const r4=marks.find(mark=>mark<40)
console.log("First mark below 40:",r4)

const r5=marks.findIndex(mark=>mark==92)
console.log("Index of marks 92:",r5)