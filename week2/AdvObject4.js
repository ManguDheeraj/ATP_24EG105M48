const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const r1=movies.filter(movObj=>movObj.genre=="Sci-Fi")
console.log("Movies with Sci-Fi genre:",r1)

const r2=movies.map(movObj=>{
    if(movObj.id==1){
        return [movObj.title,movObj.rating]
    }
})
console.log("Used map method:",r2)

const r3=movies.reduce((acc,movObj)=>acc+movObj.rating,0)
console.log("average movie rating:",r3/movies.length)

const r4=movies.find(movObj=>movObj.title=="Joker")
console.log("Joker movie find method:",r4)

const r5=movies.findIndex(movObj=>movObj.title=="Avengers")
console.log("Index of Avengers movie:",r5)