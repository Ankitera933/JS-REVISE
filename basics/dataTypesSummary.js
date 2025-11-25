//primitvs
// 7 types of primitive data types in JavaScript
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. bigint
// js is dynamically typed language because we dont have to specify data types while declaring variables'

// NOn primitive data type
// 1. objects
// 2. arrays
// 3. functions



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
let dataStudent={
  name:"ANkit",
  age:23,
  isAdmin:true
}
console.log(typeof(dataStudent))//object
let arr=["rahul","raman","raghav"];
console.log(typeof(arr))//object
 const work=function (){
  console.log("my work");
}
/////////************************************************************************///////////////
//Stack(Primitive data types)//copy of data vs Heap(Non-primitive data types) //reference to data

let myname="Ankit";
let newName=myname;
console.log(myname)//Ankit
newName="Prit"
console.log(myname)//Ankit
console.log(newName)//Prit

let studentDatat1={
  name:"Ankit",
  age:23
}
let studentData2=studentDatat1;
console.log(studentDatat1)//{ name: 'Ankit', age: 23 }
studentData2.name="Prit"
console.log(studentDatat1)//{ name: 'Prit', age: 23 }
console.log(studentData2)//{ name: 'Prit', age: 23 }