//singleton

const tinder=new Object();
tinder.name="Tinder App"
tinder.id=122
tinder.rating=4.5
tinder.isLoggedIn=true
tinder.skills=["UI/UX","Figma","Adobe XD"]
tinder.greetUser=function(){
  console.log(`Welcome to ${this.name}`);
}
console.log(tinder.greetUser());

const obj1={1:"one",2:"two"}
const obj2={3:"three",4:"four"}
const mergedObject=Object.assign({},obj1,obj2)
console.log(mergedObject);

const merge={...obj1,...obj2}
console.log(merge);
console.log(merge[1])

const user=[
  {
    userId1:1,
    name:"Ankit",
    age:18

  },
  {
    userId2:2,
    name:"Prit",
    age:20
  }
]
console.log(user[0].name)

console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

const course={
  courseId:1,
  courseName:"JavaScript",
  courseDuration:"3 months"
}
const{courseDuration:duration}=course//renaming while destructuring
console.log(duration);