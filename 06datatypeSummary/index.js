// Primitive : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345859598344n

// Non primitive

// Array, Objects, Function

const heros = ["Ashish", "Sharma", "Abhineet"]
let myObj = {
    name: "Ashish",
    age: 20,
}


const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof scoreValue);
