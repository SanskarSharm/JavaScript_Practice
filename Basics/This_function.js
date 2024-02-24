//aero function

const user ={
    username: 'batman',
    price: 1000,
    
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the Batcave`)
        console.log(this)
    }

}
user.welcomeMessage()
user.username ="sam"
user.welcomeMessage()


console.log(this) //window object


function chai(){
    let username = "chai"
    console.log(this.username)
}
chai() //window object

//arrow function

const chai2 = () => {
    let username = "sanskar "
    console.log(this)
} 
chai2() //window object


const addTwo = (a,b) => {
    return a+b
}
console.log(addTwo(2,3))

// const addTwo2 = (a,b) => (a+b)
// console.log(addTwo2(2,3))
//isme return keyword nhi use hota hain