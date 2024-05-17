const name = "Ashish"
const repoCount = 50

// console.log(name + repoCount + "Value")  is type ka kbhi nhi likhna chaye

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // is type likhna shi rhta hai


const gameName = new String('Ashish')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)

console.log(gameName.toUpperCase())  // this is function
console.log(gameName.charAt(2))  
console.log(gameName.indexOf('h'))  

const newString = gameName.substring(0, 4)  // Substring
console.log(newString)

const anotherString = gameName.slice(-10, 4)
console.log(anotherString)

const newStringOne =  " ashish "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://hitest.com/hitest%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('subder'))

console.log(gameName.split('-'))
