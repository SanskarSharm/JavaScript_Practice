//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

console.log(typeof myDate)

console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(myDate.toJSON())

console.log(myDate.getFullYear())
console.log(myDate.getHours())
console.log(myDate.getTimezoneOffset())

//months 0 se start hote h js me
// let myCreatedDate =new Date(2023,0,23,5,3)
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)

newDate.toLocaleString('default',{weekday: "long"})

