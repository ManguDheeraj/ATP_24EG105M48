function search(a,b){
    let i=0;
    let found=0;
    while(i<a.length){
        if(a[i]==b){
            found=1;
            break;
        }
        else{
            found=0;
            i++
        }
    }
    if(found==1){
        console.log(`Element at index ${i}`)
    }
    else{
        console.log("Not found");
    }
}
let res=search([10,20,45,7,3],45);

