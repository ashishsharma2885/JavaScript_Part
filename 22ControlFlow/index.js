// if 
// comparasion operator - <, > <=, >=, ==, !=, ===, !==

/*
const temperature = 41
if (temperature < 40) {
   console.log("less than 50");
} else {
    console.log("temperature is greater than 50")
} */

/* Output nhi hoga yh program
const score = 200

if( score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`)
}
console.log(`User power: ${power}`)
*/

/*const balance = 1000
 if(balance > 500) console.log("test"), console.log("test2") */


// Nesting multiple time check

/*const balance = 1000
if (balance < 500){
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
     console.log("less yhan 750")
} else {
    console.log("less than 1200")
} */


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy courese")
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}


