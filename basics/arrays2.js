let marvel_heroes=["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];
let dc_heroes=["Batman", "Superman", "Flash", "Wonder Woman"]

let superheroes=dc_heroes.concat(marvel_heroes)//concat method
console.log(superheroes);

let newSuperheroes=[...marvel_heroes,...dc_heroes]//spread operator
console.log(newSuperheroes);

let newArray=["ar","ar",["br","cr","dr"],[["er","fr"],"gr"]]
console.log(newArray.flat(Infinity))//1 level flat

console.log(Array.isArray("Ankit"))//to check whether it is array or not
console.log(Array.from("Ankit"))//to convert into array from string
let arrscore=100
let score2=200
let score3=300
console.log(Array.of(arrscore,score2,score3))//to convert into array from individual elements
