function arraySum(a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
    }
    return sum;
}
let res=arraySum([10,204,67]);
console.log(`sum in array:${res}`);