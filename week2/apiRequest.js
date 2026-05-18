//technology neutreal data format 1)XML  2)JSON-Java Script Onject Notation
//make API request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(postData=>console.log(postData))
.catch(err=>console.log("error is:",err))