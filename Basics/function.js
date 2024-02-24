
// Function Declaration
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("K");
    console.log("A");
    console.log("R");

}
// sayMyName()

// function addTwoNumbers(a,b){
//     return a+b
// }
// console.log(addTwoNumbers(2,3))
//best practice is to use return in function

function addTwoNumbers(a,b){
    console.log(a+b)
}
// addTwoNumbers(2,3)
addTwoNumbers(2,null)
addTwoNumbers(2,"a")
const result = addTwoNumbers(2,7)

console.log("Result is: ",result)

function loginUserMessage(username){
    if(username === undefined){
        return "Please provide a username"
    }

    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("Sanskar"))


function calculateCarPrice(...num1){

    return num1

}
console.log(calculateCarPrice( 1000,400,500))



const User ={
    username: "Sanskar",
    price: 1000,

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(User)


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))