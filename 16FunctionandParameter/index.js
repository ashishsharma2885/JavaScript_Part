function sayMyName() {   // This is function ka defenation
console.log("A")
console.log("S")
console.log("H")
console.log("I")
console.log("S")
console.log("H")
}

//sayMyName()  // yh ho gya referance and execution

// function addTwoNumber(number1 , number2){  // jo yh number1 aur number2 hai usko bolte hai parameter 
//    console.log(number1 + number2)
// }
// addTwoNumber(7, 5)  // jo yh 7, 5 hai usko bolte hai argument


function addTwoNumber(number1 , number2){ 
    let result = number1 + number2   // function ka ek rule hota hai jo app ek baar return kar diye usko baad koi kaam nhi karega function
    // return result
    // console.log("Ashish") // yh niche hai toh kbhi print nhi hoga yhi return ke uppar kar dunga toh print hoga
 }
 
 const result = addTwoNumber(3, 5)
// console.log("Result ", result)


function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Ashish"))  // toh is tarah parameter liye jate hai


function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username")
        return     // jaise hm return keyword lagaya uske baad niche wala run nhi hoga
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())