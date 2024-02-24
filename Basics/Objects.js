//singleton
// Description: This file contains the objects that are used in the game
//construction se bnega to singleton bnega
//singleton is a design pattern

// Object.create() isko use krke bna skte hain
//yeh constructor se bna h



//literal
const mySym = Symbol("key1")

const JsUser = {
    name: "sanskar",
    age: 20,
    [mySym] : "myKey1", //symbol
    location:"jaipur",
    email: "sanskarsharma4546@gmail.com",
    isLogged: false,
    LastLoginDays:["Monday","Sunday"]
}

console.log(JsUser)
console.log(JsUser["name"])
console.log(JsUser[mySym])
console.log(typeof(JsUser[mySym]))

JsUser.email = "ss0045@srmist.edu.in"
// Object.freeze(JsUser) //freeze krne se koi bhi change nhi ho skta
console.log(JsUser.email)
JsUser.isLogged = true
console.log(JsUser.isLogged)

JsUser.email = "ram4546@gmail.com"
console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greetingTwo())