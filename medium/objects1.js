//singleton
//Object.create(null);

//Object literal

const mySym=Symbol("key1")
const jsUser={
  name:"Ankit",
  age:18,
  [mySym]:"mykey1value",
  1:"one",
  2:"two",
  3:"three",
  skill:["HTML","CSS","JavaScript"]
}

const jsUser2={
  name:"Prit",
  age:20,
  work:"Frontend Developer"
}
// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["name"])
// console.log(jsUser.skill);
// console.log(jsUser[mySym]);
jsUser.name="PRit"
console.log(jsUser.name);
// Object.freeze(jsUser)
jsUser.name="Ankit"
console.log(jsUser.name);

jsUser.greeting=function(){
  console.log("Hello JS User");
}
jsUser.greeting2=function(){
  console.log(`Hello ${jsUser.name} Welcome to JS${jsUser2.name} world`);
}
console.log(jsUser.greeting2());
