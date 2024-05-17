const userEmail = "ashish@h.ai"  // agar string ke under kuch hai toh maan liya gya shi hai agar khali string hota toh empty value hota

if (userEmail) {
    console.log("Got user email")
}else {
    console.log("Don't have user email")
}


/* Notes
 falsy values
 false, 0, -0, BigInt, On, "", null, undefined, NaN

 truethy values
 "0", "false", " ", [], {}, function(){}
*/

// if (userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }


// Nullish Coelescing Operator (??): null undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1)



//  Ternary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")