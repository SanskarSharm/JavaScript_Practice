//syntax of switch statement
// switch (key){
//     case value:
//         // code
//         break;

//     default:
//         // code
//         break;
// }

const month = 10

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Invalid Month")
        break;
}

const userEmail = "sanskarsharma4546@gmail.com"

if(userEmail){
    console.log("Email is valid")
}
else{
    console.log("Email is invalid")
}

//falsy values
//false, 0, -0, "", null, undefined, NaN, BigInt(0n)

//truthy values
//true, 1, -1, " ", [], {}, function(){},"0", "false", "null", "undefined", "NaN", "BigInt(0n)"


if(userEmail.length==0){
    console.log("Email is invalid")
}

const emptyObj = {}
if(Object.keys(emptyObj).length==0){
    console.log("Object is empty")
}

//Nullish coalescing operator(??): null, undefined

let val1;
// val1 = 5 ?? 10 isme 5 hoga
// val1 = null ?? 10 isme 10 hoga
//val1 = undefined ?? 10 isme 10 hoga

val1  = null ?? 10 ?? 20
console.log(val1)

//Terinary Operator

// condition ? true : false

let age = 20
let isAdult = age>=18 ? console.log("Adult") : console.log("Not Adult")
