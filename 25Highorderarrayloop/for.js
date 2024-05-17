const myObject = {
    js: "Javascript",
    cpp: "C++",
    java: "java",
    python: "Python",
}

for (const key in myObject){
  //  console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programing = ["js", "rb", "py", "java", "cpp"]

for (const key in programing) {
    console.log(programing[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('GB', "United Kingdom")

for (const key in map) {
   console.log(key)
}