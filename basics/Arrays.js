const arr=[1,2,3,4,5,5,6]
// console.log(arr)
const arr2=new Array("Apple","Ball","Cat","DOg")
// console.log(arr2)
arr.push(7)
// console.log(arr)
// console.log(arr.includes(4))
// console.log(arr.indexOf(5))

const newArr=arr.join()
// console.log(newArr)
// console.log(typeof(newArr))


const arr3=arr.slice(1,3)//non mutating original array
console.log(`A ${arr}`)

console.log(`B ${arr3}`)

arr4=arr.splice(1,3)//mutating original array
console.log(arr)
console.log(`c ${arr4}`)