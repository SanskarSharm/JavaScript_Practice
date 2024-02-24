//Global excutaion context
//Function excutaion context
//Eval excutaion context

//memory creation phase
//1. Global Object
//2. this
//3. Outer Environment
//4. Memory creation for variables and functions
//5. Hoisting
//6. this
//7. Outer Environment

//code excutaion phase
//1. this
//2. Outer Environment
//3. Hoisting

//global excutaion  this
//memory creation phase
//execution phase

let val1 =10//undefined
let val2 =5//undefined

function addNum(num1,num2){//defining
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)//undefined
let result2 = addNum(10,2)//undefined
console.log(result1)
console.log(result2)