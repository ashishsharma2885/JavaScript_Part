// array

/*
const myArr = [0, 1, 2,3,4]
const heros = ["Ashish", "Sharma", "abhineet", "Aarbh"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])
console.log(heros)
console.log(myArr2) */

// Array Method
const myArr1 = [0, 1, 2,3,4]
// myArr1.push(6)  // push method value add ho jayegi
// myArr1.push(7)
// myArr1.pop() // pop me koi argument nhi dena hota hai bs wh last value remove kar dega

// myArr1.unshift(9) // unshift jo hota array ke start me value add ho jata hai
// myArr1.shift()
// console.log(myArr1.indexOf(3))
// console.log(myArr1.includes(9)) // true false me defined karega yh 

const newArr = myArr1.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr1)
console.log(newArr)

// Slice and splice

console.log("A", myArr1)
const myn1 = myArr1.slice(1, 3)

console.log(myn1)
console.log("C", myArr1)

const myn2 = myArr1.splice(1, 3)
console.log(myn2)