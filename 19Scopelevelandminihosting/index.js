function one() {
    const username = "Ashish"

    function two() {
        const website = "youtuebe"
        console.log(username)
    }
   // console.log(website)
    two()
}
// one()

if (true) {
    const username = "Ashish"
    if (username === "Ashish") {
        const website = "youtuebe"
        console.log(username + website)
    }
   // console.log(website)
}
// console.log(username)



/******************** intersting ************************ */
function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)