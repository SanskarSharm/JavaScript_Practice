// const user ={
//     username: 'sanskar',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log(`Username is ${this.username} and login count is ${this.loginCount}`)
//         console.log(this) //current object(context)

//     }


// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)//{} abhi kuch nhi h
//yeh browser me change hoga kyunki udher bhut kuch rkha hota h


function User(username, loginCount, islogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.islogedIn = islogedIn;

    this.greeting = function(){
        console.log(`Hi ${this.username}`)
    }


    return this;//returning the object by default
}

const userOne = new User('sanskar', 8, true)
const userTwo = new User('sharma', 18, false)//values overrided ho jayegi to new use krenge
console.log(userOne)
console.log(userTwo)
// userOne.greeting()
console.log(userOne.constructor)//[Function: User]


