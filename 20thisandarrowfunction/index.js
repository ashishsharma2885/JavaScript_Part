// this keyword - current context ke bare me batata hai

const user = {
    username: "Ashish",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}
//  user.welcomeMessage()
//  user.username = "Sharma"  // context ka mtlb simple value 
//  user.welcomeMessage()

//console.log(this)


// function Ashish() {
//     let username = "Sharma"
//     console.log(this)
// }
// Ashish()


/****************************************ArrowFunction************************************************* */

// const chai = () => {
//     let username = "Ashish"
//     console.log(this.username)
// }
// chai()


// pure arrow function pe baat karenge

// const addTwo =  (num1, num2) => {  // yha 
//     return num1 + num2
// }

// const addTwo =  (num1, num2) => (num1 + num2 )  // implicity method agar curlybrace me likha toh return nhi karna padega yha pe square bracke likhnege toh return nhi likhna padega

const addTwo = (num1, num2) => ({username: "Ashish"})
console.log(addTwo(3, 4))