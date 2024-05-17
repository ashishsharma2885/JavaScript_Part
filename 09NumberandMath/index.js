/* Yh Number hai
const score = 400

const balance = new Number(100)
console.log(balance)

console.log(balance.toFixed(2)) // output - 100.00


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))  // output - 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
*/


// ************ Maths ********************//

const hundreds = 1000000

// console.log(Math)
// console.log(Math.abs(4))
// console.log(Math.round(4, 6))
// console.log(Math.ceil(4, 6))
// console.log(Math.floor(4, 6))
// console.log(Math.min(4, 3, 5, 6))
// console.log(Math.max(4, 3, 8,6))


console.log(Math.random())  // Math.random - Math.random ki value hamesha ayegi 0 aur 1 ke bich me
console.log((Math.random()*10) + 1) 
console.log(Math.floor(Math.random()*10) + 1) 


const min = 10
const max = 20

console.log(Math.floor (Math.random() * (max - min + 1)) + min)