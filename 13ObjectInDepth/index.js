// object literals

// symbol delcared
const mySym = Symbol("key1")

const JsUser = {
    name: "Ashish",
    "full name": "Ashish Sharma",
    [mySym]: "mykey1",
    age: 24,
    location: "Delhi",
    email: "ashish@gmail.com",
    isLoggedIn:  false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser [mySym])

JsUser.email = "ashishchat@gmail.com"
//Object.freeze(JsUser) // value add karne ke liye freeze use hote hai
JsUser.email = "ashish@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());