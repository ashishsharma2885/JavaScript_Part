// Dates

let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate. toLocaleString())

console.log(typeof myDate)

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate. toDateString())

let myCreatesDate = new Date("01-14-2023")
console.log(myCreatesDate. toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // milisecond karne ke liye
console.log(myCreateDate.getTime())

console.log(Date.now()) // Second me karne ke liye

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})