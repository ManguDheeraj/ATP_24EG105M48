let m=[45,86,29,6,577,94];
let small=m[0];
for(let i=0;i<m.length;i++){
    if(m[i]<small){
        small=m[i];
    }
}
console.log(`Smallest in the array:${small}`);