//primitive
//7 types: string, number, bigint, boolean, null, undefined, symbol

//non-primitive
//object, array, function

const bigNumber = 12345678345n
console.log(bigNumber)

const heros = ["Ironman", "Thor", "Hulk"]
let myObject ={
    name:"Sanskar", age: 18,
    
}

const myFunction = function(){
    console.log("Hello")
}

console.log(typeof myObject)
console.log(typeof heros)
console.log(myFunction)


//Stack and heap

//stack => memory allocation for variables
//heap => memory allocation for objects

//stack => LIFO
//heap => random memory allocation

//stack => fixed size
//heap => dynamic size

//stack => fast access
//heap => slow access

//stack => memory allocation for primitive data types
//heap => memory allocation for non-primitive data types

//stack => memory allocation for function call
//heap => memory allocation for function definition

let myYoutubename = "Sanskar Sharma"

let anothername = myYoutubename
anothername = "Sanskar"

console.log(anothername)
console.log(myYoutubename)

let userOne ={
    email:"sansakrsharma@gmail.com",
    upi: "xxxxxxx@xxx"
}

let userTwo = userOne
userTwo.email ="user@google.com"
console.log(userTwo)
console.log(userOne)

console.log(userTwo)
console.log(userOne)
