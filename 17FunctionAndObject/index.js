function calculateCartPrice(...num1){  // sb khel ... ka hai tbhi 3 argument pass honge
   return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Ashish",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)  // app direct object bhi pass kar skte hai

handleObject({  // direct bhi object pass kar skte hai
 username: "Sharma",
 price: 300
})


const myNewArray = [200, 300, 400, 500] // direct bhi array pass kar skte hai

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))