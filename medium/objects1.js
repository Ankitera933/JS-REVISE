//singleton
//Object.create(null);

//Object literal

const mySym=Symbol("key1")//why symbol used here?=>to make unique keys in object :explain properly :1)to avoid name clashes 2) to make properties non-enumerable in simple terms it will not show up in loops and whats its purpose in real life scenarios: e.g.when working with third party libraries where u dont want ur properties to clash with theirs
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
