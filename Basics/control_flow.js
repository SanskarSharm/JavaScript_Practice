//if statement


// if(condition/*yeh true honi chahiye*/){
//     //code
    
// }
// if(flase/*yeh true honi chahiye yeh excute nhi hoga*/){
//     console.log("This is true")
// }

// const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("User is logged in")
// }

if(2==="2"){
    console.log("This is true")
}
else{
    console.log("This is false")
}

const score =200
if(score >100){
    const power = "fly"
    console.log(`User Power : ${power}`)
}
else{
    console.log("User Power : None")
}

const balance = 1000

if(balance>500) console.log("test"),console.log("test2");

//nesting of if else

const price =1000

if(price<500 ){
    console.log("Price is less than 500 and greater than 100")
}
else if(price > 500){
    console.log("Price is greater than 500")
}
else{
    console.log("Price is less than 100")
}


const isUserLoggedIn =true
const debitCard = true
const loggedInWithGoogle = true
const loggedInWithFacebook = false

if(isUserLoggedIn && debitCard){
    console.log("User can make a purchase")
}
if(isUserLoggedIn || loggedInWithGoogle){
    console.log("User can make a purchase")
}